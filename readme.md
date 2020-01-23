# Micro FrontEnds
This is a sample kick off application to start your own library of Micro Frontends. This repository will allow you to quickly build React and Web Components and you will be able to document them using a storybook and build distribution files using Rollup. 

## What is this?
I already see that there are multiple definitions of what micro frontends are and how to create them. At this point I will only show you my vision. So… let’s start with a short introduction. 

The current trend is to build a feature-rich and powerful browsers apps. In many cases they sits on top of a micro service architecture. Over time the UI layer grows and gets more and more difficult to maintain. We can call it a Frontend Monolith. The idea behind Micro FrontEnds is to think about a website / web app as a composition of features. Each of them is responsible for one particular action. Simplifying you can have a one variant of a nice toy castle or you can have a box of lego bricks and build x number of castles, houses, cars etc.

## Live example
[Storybook](https://jaing.github.io/micro-frontends-sample-app/index.html?path=/story/example-story--example-one)

## How to start
To start a storybook with examples.

```
npm run storybook
```


If you want to create w new micro frontend: (make sure to set a widget name in package.json. There is a env variable NAME)

```
npm run create-widget
```

Next step will be to install node modules for newly created widget. Go to your widget folder:

```
/widgets/{name}/
```

And run:

```
yarn install / npm install
```

When are dependencies are installed you can run a rollup watcher that will recompile after you do the changes:

```
npm run start
```

and in case you want to build all bundles (React, Web Component) simply run

```
npm run prepare
```

To create a story for your newly created widget you can follow examples I created for React and Web Component:

```
stories/example.stories.js
stories/example.web-component.stories.js
```

## Repository folder structure
I decided to go with monorepo. We keep every micro frontend in one place. It make sense to have a separate repository for a big UI app but when you have a multiple small applications why not to keep them in one place? 

 * **scripts** - we keep some helpful scripts in here like one that is creating a micro frontend template so you can quickly start building a new widget.
 * **stories** - all micro frontends are documented in a storybook
 * **widgets** - folder for all widgets
    * **example-widget**
        * **dist** - distribution file for React and Web Component version
        * **src** - source files
            * **tests**
            * **index.js** - main file for React Component
            * **index.wc.js** - main file for Web Component
         * **package.json**
         * **rollup.config.js**
         * **rollup.wc.config.js**
 * **package.json**


As you see we are using rollup for building distribution file. It’s great and simple. We maintain two different configuration files. One for React one for a Web Component. 


## Examples
I created two sample components to show how you can build them and document them in storybook. There is also an example how components can communicate with each other using events. If you are not a big fan of events are you are aiming for a React application - you can always use callback methods to orchestrate everything using parent application state. I.e.

```
    state = {
        selection: {}
    }

    render() {
        return (
            <>
                <component onButtonClick={data => this.setState({selection: data})} />
                <componentTwo selection={this.state.selection} />
            </>
        )
    }
``` 
