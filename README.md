#Team Code : aberrant-coast-299 
# Team Name : BlueLock

  "Buffer is a social media management application or tool. 
  It helps you to manage multiple social media networks from one place.
  It is one of the best time saving methods in the world of social media marketing. 
  Several international brands are already using it."

# User Authentication api's

- POST -Registeration - https://bluelock.cyclic.app/user/signup - required fields(name,email,password)
- POST -Login - https://bluelock.cyclic.app/user/signin - required fields(email,password)
- DELETE - https://bluelock.cyclic.app/user/delete - required filed -email
- PATCH - https://bluelock.cyclic.app/user/edit - required fields -(email,newemail,newpassword)
- GET - allusers - https://bluelock.cyclic.app/user

/* CASE SENSITIVE */

# Template api
- GET Templates - https://bluelock.cyclic.app/template
- GET Individual Template -  https://bluelock.cyclic.app/template/:id params

# calender api's

- GET posts - https://bluelock.cyclic.app/post
- POST posts - https://bluelock.cyclic.app/post
