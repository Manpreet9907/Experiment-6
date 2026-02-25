Experiment–1: Handling Forms Using Controlled Components

In this experiment, we implemented form handling using controlled components in React. We created a form containing multiple input fields such as text inputs, radio buttons, checkboxes, dropdowns, and date fields. All input values were managed using the useState hook, making the component state the single source of truth.

We implemented change event handlers to update state whenever the user entered data. The form submission was handled using an event handler function, which processed the entered values and displayed a success message. This experiment helped us understand how controlled components provide better control, consistency, and predictability in managing user input in React applications.


<img width="869" height="729" alt="Screenshot 2026-02-25 002801" src="https://github.com/user-attachments/assets/360e3b7f-4b28-4eb1-8d99-81ef0f0c06d6" />
<img width="721" height="730" alt="Screenshot 2026-02-25 002815" src="https://github.com/user-attachments/assets/fec116d6-7db3-470a-bb8e-7295555712b6" />

Experiment–2: Client-Side Form Validation

In this experiment, we implemented client-side validation for a login form containing Email ID and Password fields. Validation was performed before form submission to ensure correct data entry without server interaction.

The email field was validated to ensure it contains “@” and ends with a valid domain extension such as .com, .in, or other country codes. The password field was validated based on specific conditions: it must start with a capital letter, contain at least one numeric digit, include at least one special character, and have a minimum length of five characters.

If the input values did not meet the required conditions, appropriate error messages were displayed. Upon successful validation, a success message was shown. This experiment demonstrated how client-side validation improves user experience, enhances security, and prevents invalid form submissions.
we created and handled a form in a React application using controlled components. We designed input fields such as text inputs, radio buttons, checkboxes, select dropdowns, and date fields. The values of all inputs were managed using the useState hook, making the component state the single source of truth. We implemented event handlers to update the state whenever the user entered or changed data. The form submission was handled using a submit event, and the entered data was processed or displayed accordingly. This experiment demonstrated how controlled components provide better control, data handling, and predictability in React forms.

<img width="720" height="573" alt="Screenshot 2026-02-25 004424" src="https://github.com/user-attachments/assets/62faede9-0cd8-480d-874b-5742173750e4" />
<img width="595" height="498" alt="Screenshot 2026-02-25 004450" src="https://github.com/user-attachments/assets/5c705df1-f4dd-4369-89e6-aed923e597eb" />
