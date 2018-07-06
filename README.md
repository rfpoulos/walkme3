This is walking tour app that allows guides to upload walks that walkers can then search for.  This project is a major refactor of the project found here: https://github.com/rfpoulos/walkmereact.  The same node server from that project will be used which is found here: https://github.com/rfpoulos/walkmenode.

The general design principle is to only use an manipulate state at the view level, and all components should only accept props.  There is a redux store, but as opposed to storing all the state for the entire app in the store, only information that is shared amoungst multiple views is going to be stored in redux. This will make the redux store more readable and manageable.

All components are styled locally to help keep styling consistant across the app.

## Design Flowchart

The goal is to start with the smallest possible solution, and "level-up" as other functionality is needed.

#### Component
A component should only accept props.  This is the dumbest building block.  They should all have a local style sheet so that they can be used consistantly across multple views.
#### View
A view is established if the final product should be accessible directly by the router.  A view is made up of multiple components generally.  A view does have a local stylesheet, but should only organize how the components appear in relation to each other on the page.  Anything that accepts props should be styled locally on the component level.
#### Add local state (recompose)
If the view requires state that will potentially change, then recompose will be wrap that view.  withState and withHandlers will be used to trikle down props to the components.  Recompose will also be used to handle lifecycle hooks.  The most common lifecycle hook to be used will be componentDidMount in order to update props from the server.  All vanilla js to manupulate data or retrieve it (like a fetch function) will be stored in a separate, but local file called helper.js.
#### Redux Store (connect)
Lastly, if any props from one view effect the props of another view, then the view (whether is has recompose or not) will be wrapped in the connect function so it can use dispatchers to update state across the app.

#### Special Mention - Fragments
Occasionally, there will be data that needs to update, but is used differently accross the app (like the user location).  This will be a case for a Fragment.  Fragments will always use the connect function to use a redux dispatcher.
