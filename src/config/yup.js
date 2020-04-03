import * as Yup from "yup"
import printValue from "yup/lib/util/printValue"

// Copied from: https://github.com/jquense/yup/blob/master/src/locale.js

const mixed = {
  default: `Invalid`,
  required: `Required`,
  oneOf: `Must be one of the following values: \${values}`,
  notOneOf: `Must not be one of the following values: \${values}`,
  notType: ({ type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value
    let msg =
      `Must be a \`${type}\` type, ` +
      `but the final value was: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (cast from the value \`${printValue(originalValue, true)}\`).`
        : `.`)

    if (value === null) {
      msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``
    }

    return msg
  },
}

const string = {
  length: `Must be exactly \${length} characters`,
  min: `Must be at least \${min} characters`,
  max: `Must be at most \${max} characters`,
  matches: `Must match the following: "\${regex}"`,
  email: `Must be a valid email`,
  url: `Must be a valid URL`,
  trim: `Must be a trimmed string`,
  lowercase: `Must be a lowercase string`,
  uppercase: `Must be a upper case string`,
  phone: `Must be a valid phone number`,
}

const number = {
  min: `Must be greater than or equal to \${min}`,
  max: `Must be less than or equal to \${max}`,
  lessThan: `Must be less than \${less}`,
  moreThan: `Must be greater than \${more}`,
  notEqual: `Must be not equal to \${notEqual}`,
  positive: `Must be a positive number`,
  negative: `Must be a negative number`,
  integer: `Must be an integer`,
}

const date = {
  min: `Must be later than \${min}`,
  max: `Must be at earlier than \${max}`,
}

const boolean = {
  termsAndConditions: `Must accept terms and conditions`,
}

const object = {
  noUnknown: `Cannot have keys not specified in the object shape`,
}

const array = {
  min: `Must have at least \${min} items`,
  max: `Must have less than or equal to \${max} items`,
}

Yup.setLocale({
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
})

// CUSTOM METHODS

Yup.addMethod(Yup.boolean, `termsAndConditions`, function (message) {
  return this.test(
    `termsAndConditions`,
    message || boolean.termsAndConditions,
    (value) => value === true
  )
})

Yup.addMethod(Yup.string, `phone`, function (message) {
  return this.test(
    `phone`,
    message || string.phone,
    (value) =>
      /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(value) &&
      6 < value.length &&
      18 > value.length
  )
  // https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript/4338544#comment90042129_33561517
})
