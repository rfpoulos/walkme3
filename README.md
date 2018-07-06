This is walking tour app that allows guides to upload walks that walkers can then search for.  This project is a major refactor of the project found here: https://github.com/rfpoulos/walkmereact.

The general design principle is to only use an manipulate state at the view level, and all components should only accept props.  There is a redux store, but as opposed to storing all the state for the entire app, only information that is shared amoungst multiple views is going to be stored in redux. This will make the redux store more readable and manageable.

All components are styled locally to help keep styling consistant across the app.

## Design Flowchart
