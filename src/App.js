import React from 'react';
import ReactForm from './Form/ReactForm';

function App() {
  return (
    <div className="App">
      <ReactForm
        onsubmit={(values) => {
          console.log(values);

        }}
        defaultValues={{
          firstName: '',
          lastName: ''
        }}
      >
        {
          ({ values, handleChange, handleSubmit, errors, handleBlur }) => (
            <div className="container" style={{ marginTop: 30 }}>
              <form onSubmit={handleSubmit}>
                <label> First Name </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="error-class"> {errors.firstName} </span>
                <label> Last Name </label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="error-class"> {errors.lastName} </span>
                <br />
                <button type="submit"> submit </button>
              </form>
            </div>
          )
        }
      </ReactForm>
    </div>
  );
}

export default App;