# Django React Application

Django-ReactJS web application made to support daily contact management. You can list all the contacts from your virtual phone book, add a new contact, edit or delete an existing one.

### Sneak peak
- Add a contact form with validation errors

![Add a contact form with validation errors](https://user-images.githubusercontent.com/96050575/174888651-ca491f95-996f-40e0-ae5e-3ebcc10672bf.png)

- Screen with one contact added

![Screen with one contact added](https://user-images.githubusercontent.com/96050575/174888930-a4db19e6-ba61-4355-a80f-9c4c985b72e9.png)

- The edit action with the form component visible

![The edit action with the form component visible](https://user-images.githubusercontent.com/96050575/174889015-d8b5d145-ca6a-4e3d-85f6-e387444adb7d.png)


## Local setup

### Requirements: You must have installed python and node.js.

Since the back-end implementation is done using Django and the front-end one with ReactJS, for running the project on your laptop/PC you must follow the next steps:
1. Make a folder on your laptop/PC
2. Inside it, you must create a Virtual Environment
- windows command: `py -m venv <env_name>`
- macos/linux command: `python3 -m venv <env_name>`
3. Activate the virtual environment
- windows command: `.\<env_name>\Scripts\activate`
- macos/linux command: `source <env_name>/bin/activate`
4. Install django and djangorestframework: `pip install django` and `pip install djangorestframework`
5. Open another tab in your terminal and go to the frontend-phone-book directory.
6. In order to the Django api can communicate with out ReactJS application, run:
- `npm install` to install all the needed packages
- `npm run build` to compile the web app
7. Last step is to go back in the tab with the activated environment and run `python manage.py runserver`. (You must run this command in the directory that contains the manage.py file)

and Voilà! Now you have a phone book web application running on your laptop/PC.

