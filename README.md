# MobileMeIT Autofill

MobileMeIT Autofill is a web-based application designed to help technicians generate problem statements for device repairs based on selected warranty types and ordered parts.

## Features

- Select warranty type (ADP or Customer Limited Warranty)
- Choose parts ordered for the repair
- Automatically generate a problem statement based on the selected warranty type and parts
- Edit and add more parts to the selected parts list if needed

## Getting Started

To use MobileMeIT Autofill, follow these steps:

1. Clone the repository or download the source files.
2. Open the `popup.html` file in a web browser.

## Files

- `popup.html`: Main HTML file containing the application layout and structure
- `script.js`: JavaScript file containing the logic for generating problem statements based on selected warranty type and parts
- `popup.css`: CSS file for styling the application
- `manifest.json`: JSON file for providing metadata about the application

## Usage

1. Open the `popup.html` file in a web browser.
2. Select the warranty type (ADP or Customer Limited Warranty).
3. Choose the parts ordered for the repair by checking the boxes next to the part names.
4. Click the "Update Selected Text" button to update the selected parts list.
5. Edit and add more parts to the selected parts list if needed.
6. Click the "Generate!" button to generate a problem statement based on the selected warranty type and parts.
7. The generated problem statement will appear in the "Problem Statement" textarea.

## License

This project is licensed under the MIT License.

## Acknowledgments

- jQuery: Used for DOM manipulation and event handling
