export default function(values) {
    const errors = {};
    const requiredFields = [
      'description',
      'value',
      'payment',
      'category',
      'payee',
      'date',
      'toWho',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }