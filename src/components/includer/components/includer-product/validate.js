export default function(values) {
    const errors = {};
    const requiredFields = [
      'name',
      'price',
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