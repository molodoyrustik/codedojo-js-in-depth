function showCourseDetails(id) {
  let course = Course.findById(id);

  if (course) {
    document.querySelector(`#${elementId}`).innerHTML = `
      ${course.title},
      ${course.subtitle}
    `;
  } else {
    throw new Error('Course not found');
  }
}

showCourseDetails('javascript-in-depth');
 
// разбили функцию showCourseDetails

function findById(model, id) {
  let result = model.findById(id);

  if (!result) {
    throw new Error('Not found');
  }

  return result;
}

function format(course) {
  return `${course.title}, ${course.subtitle}`;
}

function display(selector, data) {
  document.querySelector(selector).innerHTML = data;
}

display('#course-info', format(findById(Course, 'javascript-in-depth')));

// using compose
let showCourseDetails = compose(
  display('#course-info'),
  format,
  findById(Course),
);

showCourseDetails('javascipt-in-depth');