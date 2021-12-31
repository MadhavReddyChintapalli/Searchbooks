Technical Questions

1.  I took me 2 hours to complete the assessment. If I had more time, I would have added additional filters and book details, pagination, sorting in asdcending and decsending order.

2.  I used Context for state management.
    I feel Context is good for small and medium sized applications.
    For large and complex applications, It's better to use redux
    for state management.

        Steps to create Redux:
        1. Syntax: npm install redux react-redux redux-thunk     redux-devtools-extension
        2. Create a file store.js where we create the store.
        3. Wrap App.js with <Provider store={store}>
            </Provider>
        4. Create a folder reducers with 2 files index.js and contactReducer.js.
        index.js - combine all reducers
        contactReducer.js - based on actions, what happens to state
        5. Create a folder actions with 2 files types.js and contactActions.js
        types.js - Types are nothing but a variable of strings that you can call to change the state within the reducer.
        contactActions.js - write the actions
        6. If you want to use the state and functions, import PropTypes, connect and the functions you need from actions.
        import PropTypes from 'prop-types';
        import { connect } from 'react-redux';
        import { getContacts } from '../../actions/contactActions';
        The state is accessed as props by mapping state to props using mapStateToprops.

3.  Use React Developer Tools for debugging and detecting wasted rerenders. No, I don't have experience in build and production.

4.  The API has so much information which makes it hard to use and I feel the API is not properly formatted & categorized. I would improve it by taking unwanted info and also add features like pagination and sorting/filtering.

5.  {
    "name":"Madhav Reddy Chintapalli",
    "education": [{
    "school":"Humber College",
    "degree":"Post Graduate Diploma",
    "fieldofstudy":"Information Technology Solutions",
    "from":"2019-09-01",
    "to":"2021-04-31"
    },{
    "school":"Geethanjali College",
    "degree":"Bachelors",
    "fieldofstudy":"Electronics & Communciation Engg",
    "from":"2014-09-01",
    "to":"2018-04-31"
    }],
    "experience": [{
    "company":"Witlinks Corporation",
    "title":"Full stack developer",
    "from":"2020-09-01",
    "to":"2021-08-31"
    },{
    "company":"Chistle IT Solutions",
    "title":"Webdeveloper",
    "from":"2018-05-01",
    "to":"2019-04-31"
    }],
    "skills":["HTML","CSS","SASS","BOOTSTRAP","NODE","EXPRESS","MONGODB","REACT","JEST"],
    "social":{
    "github:"github.com/madhavreddychintapalli",
    "linkedin":"linkedin.com/in/madhavreddychintapalli/"
    }
    }
