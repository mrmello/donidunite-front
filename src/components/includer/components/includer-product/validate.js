export default function(values) {
    const errors = {};
    const requiredFields = [
      'description',
      'value',
      'category',
      'active',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }