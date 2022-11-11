#Team Code : aberrant-coast-299 
# Team Name : BlueLock

  "Buffer is a social media management application or tool. 
  It helps you to manage multiple social media networks from one place.
  It is one of the best time saving methods in the world of social media marketing. 
  Several international brands are already using it."

# User Authentication api paths

- POST -Registeration - https://bluelock.cyclic.app/user/signup - required fields(name,email,password)
- POST -Login - https://bluelock.cyclic.app/user/signin - required fields(email,password)
- DELETE - https://bluelock.cyclic.app/user/delete - required filed -email
- PATCH - https://bluelock.cyclic.app/user/edit - required fields -(email,newemail,newpassword)
- GET - allusers - https://bluelock.cyclic.app/user

/* CASE SENSITIVE */

# Template JSON server api
You have to use --PORT 8080

- GET http://localhost:8080/Template
- Individualy http://localhost:8080/Template/{id} --id params
