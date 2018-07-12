# WalkMe3
This is walking tour app that allows guides to upload walks that walkers can then search for.  This project is a major refactor of the project found here: https://github.com/rfpoulos/walkmereact.  The same node server from that project will be used, found here: https://github.com/rfpoulos/walkmenode.
## Features
### Sign In/Logout
### Create Account
### Menu Navigation
### View/Edit Profile
### Search for Walks
### View/Start Walk
### Add Walks
### Offline
## Design 
The general design principle is to only use and manipulate state at the view level. All components within a view should only accept props and have no ablity to manpulate its own props.  There is a redux store, but as opposed to storing all the state for the entire app in the store, only information that is shared amoungst multiple views is going to be stored in redux. This will make the redux store more readable and manageable.

All components are to be styled locally in order to keep styling consistant across the app if components are used in multiple places.

### Design Flowchart

The goal is to start with the smallest possible solution, and "level-up" as other functionality is needed.

#### Component
A component should only accept props.  This is the dumbest building block.  They should all have a local style sheet so that they can be used consistantly across multple views.
#### View
A view is made up of multiple components and represents a full page to the user.  A view is always accessible by the router.  A view does have a local stylesheet, but should only organize how the components appear in relation to each other on the page. The components should be styled locally.  This is also where components will recieve any and all props.
#### Add local state (recompose)
If the view requires state that will potentially change, then recompose will be wrap that view.  withState and withHandlers will be used to trikle down props to the components.  Recompose will also be used to handle lifecycle hooks.  The most common lifecycle hook to be used will be componentDidMount in order to update props from the server.  All vanilla js to manupulate data or retrieve it (like a fetch function) will be stored in a separate, but local file called helper.js.
#### Redux Store (connect)
Lastly, if any props from one view effects the props of another view, then the view will be given a the connect function in order to ustilize redux.

#### Special Mention - Fragments
Occasionally, there will be data that needs to update, but is used differently accross the app (like the user location).  This will be a case for a Fragment.  Fragments will always use the connect function to use a redux dispatcher.
