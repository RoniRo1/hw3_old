import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Input, checkboxClasses } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export default function Register() {

  // מערך שגיאות
  const errors = {
    firstName: {
      massege: "invalid First name",
      valid: new RegExp("^[a-zA-Z]+$"),
    },
    lastName: {
      massege: "invalid Last name",
      valid: new RegExp("^[a-zA-Z]+$"),
    },
    password: {
      massege:
        "password need to be 7-12 and contain upper letter, 0-9, <>!@#$%^&*()_? ",
      valid: new RegExp(
        "^(?=.*[A-Z])(?=.*[0-9])(?=.*[<>!@#$%^&*()_?]).{7,12}$"
      ),
    },
    password2: { massege: "not the same one" },
    email: {
      massege: "example@example.com",
      valid: new RegExp(
        "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[com]+)*$"
      ),
    },
    username: {
      massege: "a-z, numbers and specail characters only and up to 60",
      valid: new RegExp("^[a-zA-Z0-9!@#$%^&*()_></.']+$"),
    },
    street: { massege: " רק בעברית", valid: new RegExp("^[\u0590-\u05FF ]+$") },
    birthDate: {massege:"חייב להיות מעל 18 ומתחת ל120"},
    house:{massege:"מספר חיובי בלבד", valid: new RegExp("^[1-9]+[0-9]*$")}
  };
  
  let password2 ;
  //מערך יוזר
  const person = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    img: "",
    birthDate: "",
    city: "",
    street: "",
    house: "",
    username: "",
  };
  // מערך הצגת פסקת שגיאה
  const arr = {
    firstName: "hidden",
    lastName: "hidden",
    password: "hidden",
    email: "hidden",
    img: "hidden",
    birthDate: "hidden",
    city: "hidden",
    street: "hidden",
    house: "hidden",
    username: "hidden",
    password2: "hidden",
  };
  const [values, setValues] = useState({ ...arr });
  //const [personArr, setPerson]=useState({...person})
// מערך ערים לכפתור
  let citys = ["ראש העין", "תל אביב", "חיפה", "אשדוד", "ירושלים"];
  // לחיצה על כתפור הרשמה
  function registerUser() {
    let arr = { ...values },
      counter = 0;
    console.log(person);
    if (!errors.firstName.valid.test(person.firstName)) arr.firstName = "visible";
    else {
      arr.firstName = "hidden";
      counter++;
    }

    if (!errors.lastName.valid.test(person.lastName) || person.lastName == "")arr.lastName = "visible";
    else {
      arr.lastName = "hidden";
      counter++;
    }

    if (!errors.email.valid.test(person.email) || person.email == "")arr.email = "visible";
    else {
      arr.email = "hidden";
      counter++;
    }

    if ( !errors.username.valid.test(person.username) ||person.username == "" ||person.username.length > 60 )
      arr.username = "visible";
    else {
      arr.username = "hidden";
      counter++;
    }

    if (!errors.password.valid.test(person.password) || person.password == "")  arr.password = "visible";
    else {
      arr.password = "hidden";
      counter++;
    }

    if (password2 != person.password) arr.password2 = "visible";
    else {
      arr.password2 = "hidden";
      counter++;
    }

    if (!errors.street.valid.test(person.street) || person.street == "")arr.street = "visible";
    else {
      arr.street = "hidden";
      counter++;
    }
    // חישוב גיל
    let age=calculate_age(person.birthDate)
    if(120<=age|| age <=18 || person.birthDate=="")  arr.birthDate="visible";
    else {
      arr.birthDate = "hidden";
      counter++;
    }
    if (!errors.house.valid.test(person.house) || person.house == "")
    arr.house = "visible";
  else {
    arr.house = "hidden";
    counter++;
  }
    setValues(arr);

    if (counter == 6) {
      // לעבור למסך הבא....
    }
  }

  useEffect(() => console.log(values));
  console.log(values);
// פונקציית חישוב גיל
 const calculate_age = (e) => {
    var today = new Date();
    var birthDate = new Date(e);  // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    console.log(age_now);
    return age_now;
  
  }
  return (
    <div>
      <Box sx={{ mt: 1, width: "75%" }}>
       <h1 style={{width:"60%"}}>Sign In</h1>
        <Grid container>
       
        
          {/*firstName*/}
          <Grid item xs={4} style={{margin:3}}>
            <TextField
              required
              fullWidth
              label="First Name"
              onChange={(e) => (person.firstName = e.target.value)}
            />
            <Alert severity="error" style={{ visibility: values.firstName }}>
              {" "}
              {errors.firstName.massege}
            </Alert>
          </Grid>

          {/*lastName*/}
          <Grid item xs={4} style={{margin:3}}>
            <TextField
              required
              fullWidth
              label="Last Name"
              onChange={(e) => (person.lastName = e.target.value)}
            />
            <Alert severity="error" style={{ visibility: values.lastName }}>
              {" "}
              {errors.lastName.massege}
            </Alert>
          </Grid>

          {/*email*/}
          <Grid item xs={8} style={{margin:3}}>
            <TextField
              required
              fullWidth
              label="Email Address"
              onChange={(e) => (person.email = e.target.value)}
            />
                  <Alert severity="error" style={{ visibility: values.email }}>
            {" "}
            {errors.email.massege}{" "}
          </Alert>
  </Grid>

          {/*username*/}
          <Grid item xs={8}>
            <TextField
              required
              fullWidth
              label="username"
              onChange={(e) => (person.username = e.target.value)}
            />
         <Alert severity="error" style={{ visibility: values.username }}>
            {errors.username.massege}{" "}
          </Alert>   </Grid>
        

          {/*password*/}
          <Grid item xs={4} style={{margin:3}}>
            <TextField
              required
              fullWidth
              label=" Password"
              autoComplete="new-password"
              onBlur={(e) => (person.password = e.target.value)}
            />
         <Alert severity="error" style={{ visibility: values.password }}>
            {errors.password.massege}{" "}
          </Alert>      </Grid>
         

          {/*password 2*/}
          <Grid item xs={4} style={{margin:3}}>
            <TextField
              required
              fullWidth
              label="Confirm Password"
              onBlur={(e) => (password2 = e.target.value)}
            />
            <Alert severity="error" style={{ visibility: values.password2 }}>
              {errors.password2.massege}{" "}
            </Alert>
          </Grid>
          {/*file*/}
          <Grid item xs={8} style={{margin:3}}>
            <Input
              required
              fullWidth
              autoComplete="image"
              inputProps={{ accept: "image/*" }}
              onChange={(e)=> (person.img=e.target.files[0])}
              type="file"
            />
          </Grid>
          <br />
          <br />
          <br />
          {/*city*/}
          <Grid item xs={8} style={{margin:3}}>
            <Autocomplete
              disablePortal
              
              id="combo-box-demo"
              options={citys}
              
              renderInput={(params) => <TextField {...params} label="עיר" />}
              onChange={(event, newValue) => {
                person.city = newValue;
              }}
            />    
          <br />
          <br />
          </Grid>
          {/* street*/}
          <Grid item xs={4} style={{margin:3}}>
          
              <TextField
                required
                fullWidth
                label="Street"
                onChange={(e) => (person.street = e.target.value)}
              />
           
            <Alert severity="error" style={{ visibility: values.street }}>
           
              {errors.street.massege}
            </Alert>
          </Grid>

           {/* מספר בית*/}
          <Grid item xs={4} style={{margin:3}}>
          
          <TextField
            required
            fullWidth
            label="house"
            onChange={(e) => (person.house = e.target.value)}
          />
       
        <Alert severity="error" style={{ visibility: values.house }}>
       
          {errors.house.massege}
        </Alert>

      </Grid>
               {/* תאריך לידה*/}

          <Grid item xs={8} sm={6}>
           <input  style={{margin:5}}   type="date" name="" id="" onBlur={(e)=>(person.birthDate=e.target.value)}/> :תאריך לידה
            <Alert severity="error" style={{ visibility: values.birthDate }}>
              {" "}
              {errors.birthDate.massege}
            </Alert>
          </Grid> 
          <Grid item xs={8} >
          <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={registerUser}
        >
          Sign Up
        </Button>
        </Grid>
        </Grid>

       
      </Box>
    </div>
  );
}
