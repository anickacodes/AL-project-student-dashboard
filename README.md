# Student Dashboard Project

For this assignment, I built a student dashboard that made use of already existing data stored in a JSON file. 

Users will be able to view students in several ways 
_as well as add comments to those students._ *not active*


******My Changes ****

>https://fastidious-cascaron-26a000.netlify.app/ [Netlify]

>https://trello.com/b/xbkrcU0Z/mod-3-student-dashboard-project [Trello]


✅ **Student list.** On Load, The Home page shows a list of all students. Displayed for each student is their name, username (i.e., email), birthday, and profile photo.

 ✅ **On-track status.** Each student is marked as either "On Track" or "Off Track." A student is "On Track" if the following is true about them:
   - The student has a resume certification (e.g. `certifications.resume` is `true`).
   - The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
   - The student has a GitHub certification (e.g. `certifications.github` is `true`).
   - The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
   - The student has a current CodeWars score that is over 600.

 ✅ **Additional student details.** A button on each student's profile hides and shows additional information when clicked. This feature includes the following:
   - The text of the button changes depending on whether it is open or closed.
   - Opening the details section for one student does not open it for every other student.


   - The details section includes the percentages for all scores, properly formatted as percentages.


   - The details section includes whether or not the student has received certain certifications. Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status.



*not active*
 **1-on-1 section.** Create a section in the student details section that contains information about a student's 1-on-1 with an instructor. To complete this feature, the following should be true:
   - The section should include a title. (e.g. "1-on-1 Notes".)
   - The section should include a form with commenter name, comment, and a submit button.
   - The section should show a list of all previous notes that have been added.

1. **Interactive 1-on-1 section.** Improve the 1-on-1 section with a working form. To complete this feature, the following should be true:
   - The form can be filled out and submitted. On submit, the inputs are cleared.
   - The submitted information is immediately shown in the list of notes.
   - While the notes will not persist if the page is loaded, the new notes _should_ be found if you interact with a new cohort in the cohort list and then find the student.
*not active*


✅  **Student list count.** The Home page includes a count of how many students are within the data set.

✅  **Unique list of cohorts.** The Home page includes a unique list of cohorts on the page.


✅  **Human-readable cohort names.** The list of cohorts is human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered by time.

✅  **Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page changes and only those students in the cohort are shown.


✅ **Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page should change to display what cohort is being shown. The student count should update to reflect this change.





- Include a count for the number of notes added to each student, which is updated when a new note is added. *not active*

- Allow for the user to click a button and the view of students changes to be just a list of names, or just a grid of profile images. *not active*

- Implement a "dark mode" version of the website, which changes the CSS on click. *not active*

- Add color-coding or segmentation to the cohort list, so that each year is visually distinct from one another. *not active*


