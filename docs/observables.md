Observables
==========

These are partially covered by the [angular tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#observables). But they are really really important for how our apps will work.
Observables are the perfect tool when we have an underlying json API serving up data to be displayed in the browser.

Read lots about them [in the rxjs github repo](https://github.com/ReactiveX/rxjs) and at the [ReactiveX site](http://reactivex.io/rxjs/).

Learn to love observables. They are important for us. Read about them.

The problem we want to fix
==========================

Imagine a user clicks a "search" button on your portal. This will trigger your javascript to send a http request to your app's underlying json api.  But maybe there is a network problem, and this underlying api request takes 10 seconds to respond.

Meanwhile, just 2 seconds after pushing the first search button, the user clicks a different "search" button. This triggers another http request to the api, and this time the response comes back much faster - within 1 second.

So your browser receives two http responses from the API, but it receives them in the wrong order. Each response should trigger a callback subroutine which renders the data in the browser window. But how does your app know which data to display?

This sounds like a forced-problem, but it's an example of a more general problem.  Javascript apps get messy if you don't make allowances for slow or unreliable http responses.

Basic pattern of development
============================

I found this basic pattern of development works well for our purposes. Stick to these rules and your app should work nicely with underlying API calls, and rendering json data in the browser.

Focus for now on one particular "component" of your application that displays data. For example, the component could be a "experiment information panel".  The data for the component comes from a API call. Your component will need the following things:

##1. A public "Experiment" class attribute

Declare an experiment in your component's public properties. This will always be the experiment that is currently visible on your page.

    public experiment: Experiment = null;

Your component html will show details from the experiment.

    <h4>The experiment name is {{ experiment.name }}.</h4>
    <p>The experiment type is {{ experiment.type }}.</p>

##2. A Subject of observables

Your component must declare a Subject of Observables of experiments:

    private experimentSource: Subject<Observable<Experiment>>;

And in your class's OnInit() function:

    this.experimentSource = new Subject<Observable<Experiment>>();

A [subject](https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md) is a a special type of observable. So really we've declared an observable of observables.

##3. A subscription to the subject of observables

In your OnInit() function:

    this.ExperimentSubscription = this.ExperimentSource
      .switchMap((o: Observable<Experiment>):Observable<Experiment> => o)
      .subscribe((e:Experiment) => this.experiment = e );

The important operator here is the [switchMap](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-switchMap).
This converts from an "observable of observable of experiments" to an "observable of experiments". This is the magic that ensures that only the latest API request will get rendered in the browser.

##4. An angular "service" that calls the API.

The sevice will live in the app/core/services/ directory.  The service will contain something looking like this:

    return this.http.get(`/api/experiments/myexperiment')

The important thing is, this returns an obervable, which is a like stream of experiments. In this case the stream contains only one experiment.

You will inject this service into your component. Your component's constructor will look like this:

    constructor(
      private experimentService: ExperimentService,
    ){};

##5. A function that responds to an event

Your component might respond to changes in the current url.  Or it might respond to the user clicking on a button.
Whatever your component is responding to, it needs to:

i. Call the API service to get an observable of experiments.
ii. Pass the observable of experiments to the next() function of experiment subject:

    respondToButtonClick() {
      this.experimentSource.next(this.experimentService.getExperiment("myExperiment"));
    }

##6. Cancel the subscription when you no longer need it

    ngOnDestroy() {
      if (this.experimentSubscription) {
        this.experimentSubscription.unsubscribe();
      }
    }

#Examples

Here are a few examples from the EBiSC data tracker that follow this development pattern:

* [question-detail.component](https://github.com/EMBL-EBI-GCA/ebisc_tracker_2/blob/master/webcontent/app/questions/question-detail.component.ts)
* [cell-line-list.component](https://github.com/EMBL-EBI-GCA/ebisc_tracker_2/blob/master/webcontent/app/cell-lines/cell-line-list.component.ts)
* Almost any other component you can see in the [data tracker](https://github.com/EMBL-EBI-GCA/ebisc_tracker_2/tree/master/webcontent/app).
