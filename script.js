//



// Data Element
const row1Column1 = document.getElementById("row1_col1")                                  //       
const row1Column2 = document.getElementById("row1_col2")
const row1Column3 = document.getElementById("row1_col3")
const row2Column1 = document.getElementById("row2_col1")
const row2Column2 = document.getElementById("row2_col2")
const row2Column3 = document.getElementById("row2_col3")
const row3Column1 = document.getElementById("row3_col1")
const row3Column2 = document.getElementById("row3_col2")
const row3Column3 = document.getElementById("row3_col3")                //     
// Result Element 
// Plain Result
const plainResultName = document.getElementById('plain_result_name')
const plainResultValue = document.getElementById('plain_result_value')
// Matrix Result
const resultInMatrixName = document.getElementById('result_in_matrix_name')
const resultRow1Column1 = document.getElementById("result_row1_col1")                                  //       
const resultRow1Column2 = document.getElementById("result_row1_col2")
const resultRow1Column3 = document.getElementById("result_row1_col3")
const resultRow2Column1 = document.getElementById("result_row2_col1")
const resultRow2Column2 = document.getElementById("result_row2_col2")
const resultRow2Column3 = document.getElementById("result_row2_col3")
const resultRow3Column1 = document.getElementById("result_row3_col1")
const resultRow3Column2 = document.getElementById("result_row3_col2")
const resultRow3Column3 = document.getElementById("result_row3_col3")   

// Clear all input field
function validateInputFields () {
  displayContent("none", "none")
  
  var dataInputValues = document.querySelectorAll(".data_input_value")
  dataInputValues.forEach(dataInputValue => {
    dataInputValue.value = ""
  })
}

function displayContent (plainResultValue, matrixResultValue) {
  document.getElementById("plain_result").style.display = plainResultValue
  document.getElementById("result_in_matrix").style.display = matrixResultValue
}
// Hide Output field onload
displayContent("none", "none")

/*
function checkEmptyField () {
  var dataInputValues = document.querySelectorAll(".data_input_value")
  dataInputValues.forEach(dataInputValue => {
    if(dataInputValue.value == "") return 
  })
}
*/

// Determinant Of a Matrix
function CalculateDeterminant () {
  displayContent("grid", "none")
  var determinantValue, firstDeterminantOperator, secondDeterminantOperator 
  let firstOperatorOperand1, firstOperatorOperand2, firstOperatorOperand3, secondOperatorOperand1, secondOperatorOperand2, secondOperatorOperand3                    

  firstOperatorOperand1 = row1Column1.value * row2Column2.value * row3Column3.value
  firstOperatorOperand2 = row1Column2.value * row2Column3.value * row3Column1.value
  firstOperatorOperand3 = row1Column3.value * row2Column1.value * row3Column2.value
  secondOperatorOperand1 = row3Column1.value * row2Column2.value * row1Column3.value
  secondOperatorOperand2 = row3Column2.value * row2Column3.value * row1Column1.value
  secondOperatorOperand3 = row3Column3.value * row2Column1.value * row1Column2.value
 
  firstDeterminantOperator = firstOperatorOperand1 + firstOperatorOperand2 + firstOperatorOperand3
  secondDeterminantOperator = secondOperatorOperand1 + secondOperatorOperand2 + secondOperatorOperand3

  determinantValue = firstDeterminantOperator - secondDeterminantOperator
  
  return plainResultValue.value = determinantValue
}

// Transpose Of Matrix 
function FindTranspose () { 
  resultInMatrixName.innerText = "Transpose"

  displayContent("none", "grid")
  
  resultRow1Column1.innerText = row1Column1.value
  resultRow1Column2.innerText = row2Column1.value
  resultRow1Column3.innerText = row3Column1.value
  resultRow2Column1.innerText = row1Column2.value
  resultRow2Column2.innerText = row2Column2.value
  resultRow2Column3.innerText = row3Column2.value
  resultRow3Column1.innerText = row1Column3.value
  resultRow3Column2.innerText = row2Column3.value
  resultRow3Column3.innerText = row3Column3.value
}

function callBackForAdjoint (argumentValue = "") {
  
  var adjointRow1Column1 = ((row2Column2.value * row3Column3.value) - (row3Column2.value * row2Column3.value)) 
  var adjointRow1Column2 = ((row2Column1.value * row3Column3.value) - (row3Column1.value * row2Column3.value)) * -1
  var adjointRow1Column3 = ((row2Column1.value * row3Column2.value) - (row3Column1.value * row2Column2.value))
  var adjointRow2Column1 = ((row1Column2.value * row3Column3.value) - (row3Column2.value * row1Column3.value)) * -1 
  var adjointRow2Column2 = ((row1Column1.value * row3Column3.value) - (row3Column1.value * row1Column3.value))
  var adjointRow2Column3 = ((row1Column1.value * row3Column2.value) - (row3Column1.value * row1Column2.value)) * -1
  var adjointRow3Column1 = ((row1Column2.value * row2Column3.value) - (row2Column2.value * row1Column3.value))
  var adjointRow3Column2 = ((row1Column1.value * row2Column3.value) - (row2Column1.value * row1Column3.value)) * -1
  var adjointRow3Column3 = ((row1Column1.value * row2Column2.value) - (row2Column1.value * row1Column2.value)) 
  
  resultRow1Column1.innerText = adjointRow1Column1 + ` ${argumentValue}`
  resultRow1Column2.innerText = adjointRow2Column1 + ` ${argumentValue}`
  resultRow1Column3.innerText = adjointRow3Column1 + ` ${argumentValue}`
  resultRow2Column1.innerText = adjointRow1Column2 + ` ${argumentValue}`
  resultRow2Column2.innerText = adjointRow2Column2 + ` ${argumentValue}`
  resultRow2Column3.innerText = adjointRow3Column2 + ` ${argumentValue}`
  resultRow3Column1.innerText = adjointRow1Column3 + ` ${argumentValue}`
  resultRow3Column2.innerText = adjointRow2Column3 + ` ${argumentValue}`
  resultRow3Column3.innerText = adjointRow3Column3 + ` ${argumentValue}`
}



// Adjoint Of Matrix
function FindAdjoint () {
  resultInMatrixName.innerText = "Adjoint"
  callBackForAdjoint()
  displayContent("none", "grid")
}

// Inverse Of Matrix
function CalculateInverse () {
  // Call adjoint and determinant function
  CalculateDeterminant()
  callBackForAdjoint(`/ ${plainResultValue.value}`)
  resultInMatrixName.innerText = "Inverse"
  displayContent("none", "grid")
}



















// Happy Coding