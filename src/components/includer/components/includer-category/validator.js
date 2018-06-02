export default function(values) {
    const errors = {};
    const requiredFields = [
      'description',
      'type',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }