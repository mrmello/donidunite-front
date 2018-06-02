export default function(values) {
    const errors = {};
    const requiredFields = [
      'description',
      'value',
      'payment',
      'category',
      'payee',
      'date',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }