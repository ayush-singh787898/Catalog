

# Lagrange Interpolation with JSON Input

## Project Description

This project demonstrates how to perform **Lagrange interpolation** using a set of points provided through a JSON input. The JSON contains base-encoded values, which are decoded and used for polynomial interpolation to compute the constant term. The project also includes robust JSON parsing with the `json5` module, allowing for flexible input parsing.

## Features

- **Base decoding**: Decode numbers from various bases (e.g., binary, hexadecimal).
- **Lagrange interpolation**: Calculate the polynomial interpolation using a set of points.
- **JSON parsing**: Input provided in JSON format for flexibility and ease of use.
  
## Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 12 or later.
- **npm**: Node package manager, which comes with Node.js.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/lagrange-interpolation-json.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lagrange-interpolation-json
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Ensure you have the following module installed:

   - **json5**: For robust JSON parsing.
   
   To install it, run:

   ```bash
   npm install json5
   ```

## Running the Project

1. Open the project in **VS Code** or any code editor.
2. Replace the sample JSON string in the `jsonInputString` variable with your desired JSON input.
3. Run the project using Node.js:

   ```bash
   node index.js
   ```

4. The result will display the constant term of the interpolated polynomial in the console.

## Input Format

Your input JSON should be structured as follows:

```json
{
    "keys": {
        "n": <number of points>,
        "k": <minimum number of points required>
    },
    "<point_index>": {
        "base": "<base_system>",
        "value": "<encoded_value>"
    },
    ...
}
```

For example:

```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

## Example Output

The constant term of the polynomial will be displayed in the console like:

```
The constant term of the polynomial is: <result>
```

## License

This project is licensed under the MIT License.

---

If you'd like to extract the contents of the uploaded `Catalog.zip` file or need further details, let me know!