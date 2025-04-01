# Manual Test Cases for Swag Labs E-Commerce  

## **Overview**  
This document contains the detailed manual test cases for validating the core functionalities of the Swag Labs e-commerce application. Each test case is designed to ensure feature completeness, correct behavior, and alignment with quality standards.

---

## **Test Case List**

| **Test Case ID** | **Title**                            | **Preconditions**             | **Steps**                                                                 | **Expected Result**                                         | **Status**   |
|------------------|-------------------------------------|-------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------|--------------|
| **TC_001**       | Verify login with valid credentials | User is on login page         | 1. Enter valid username. <br> 2. Enter valid password. <br> 3. Click "Login".  | User is redirected to the inventory dashboard with a welcome message. | **Pass**    |
| **TC_002**       | Verify login with invalid credentials | User is on login page         | 1. Enter invalid username. <br> 2. Enter invalid password. <br> 3. Click "Login". | Error message: "Invalid username/password."                | **Pass**    |
| **TC_003**       | Verify login with blank credentials | User is on login page         | 1. Leave username and password fields blank. <br> 2. Click "Login".         | Error message: "Username and password cannot be blank."     | **Pass**    |
| **TC_004**       | Validate sorting by price (Low to High) | User is logged in and on inventory page | 1. Open sorting dropdown. <br> 2. Select "Price (Low to High)".             | Products are displayed in ascending order of price.         | **Pass**    |
| **TC_005**       | Validate sorting by price (High to Low) | User is logged in and on inventory page | 1. Open sorting dropdown. <br> 2. Select "Price (High to Low)".            | Products are displayed in descending order of price.        | **Pass**    |
| **TC_006**       | Validate sorting by name (A to Z)    | User is logged in and on inventory page | 1. Open sorting dropdown. <br> 2. Select "Name (A to Z)".                  | Products are displayed alphabetically in ascending order.   | **Pass**    |
| **TC_007**       | Validate sorting by name (Z to A)    | User is logged in and on inventory page | 1. Open sorting dropdown. <br> 2. Select "Name (Z to A)".                  | Products are displayed alphabetically in descending order.  | **Pass**    |
| **TC_008**       | Validate adding items to the cart    | User is logged in             | 1. Navigate to inventory. <br> 2. Add multiple items to the cart. <br> 3. Open the cart. | Cart displays all added items with correct details.         | **Pass**    |
| **TC_009**       | Validate removing items from the cart | User has items in the cart    | 1. Open the cart. <br> 2. Remove one or more items. <br> 3. Verify the cart details. | The cart updates to reflect the correct number of items and updated total. | **Pass**    |
| **TC_010**       | Validate clearing the cart           | User has multiple items in the cart | 1. Open the cart. <br> 2. Remove all items. <br> 3. Check the cart.        | The cart is empty.                                           | **Pass**    |
| **TC_011**       | Validate checkout                    | User has items in the cart    | 1. Proceed to checkout. <br> 2. Enter customer details. <br> 3. Finish checkout. | Checkout is complete.                                       | **Pass**    |
| **TC_012**       | Validate checkout with an empty cart | Cart is empty                 | 1. Navigate to checkout. <br> 2. Attempt to complete checkout.             | Error message: "Your cart is empty."                        | **Fail**    |

---

## **Bug Report**

### **BUG_001: User able to navigate to checkout with an empty cart**
- **Severity:** Medium  
- **Steps to Reproduce:**  
  1. Ensure the cart is empty.  
  2. Navigate to the cart page and click the "Checkout" button.  
  3. Enter buyer details in the checkout form and click "Continue."  
  4. Click the "Finish" button.  

- **Expected Result:**  
  The user should not be able to proceed to the checkout page if the cart is empty. A message like "Your cart is empty. Please add items to proceed to checkout" should be displayed.  

- **Actual Result:**  
  The user can proceed to the checkout page and complete the checkout process, despite the cart being empty.  

- **Status:** Open  
