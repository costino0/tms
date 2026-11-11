BEGIN;
INSERT INTO users (name)
VALUES
('Alice Johnson'),
('Marcus Lee'),
('Priya Patel'),
('Tom Becker');

INSERT INTO tickets (title, description, status, priority, assigned_employee)
VALUES
('Login page returns 500 error', 'Users see a server error when submitting the login form.', 'open', 'high', 1),
('Update privacy policy text', 'Replace the outdated wording with the version approved by legal.', 'closed', 'low', 2),
('Slow dashboard loading', 'The main dashboard takes over five seconds to load.', 'in_progress', 'high', 3),
('Add dark mode toggle', 'Add a theme switch to the user settings page.', 'open', 'medium', 1),
('Fix typo on pricing page', '"Premuim" should read "Premium".', 'closed', 'low', 2),
('Email notifications not sent', 'Ticket update emails have stopped going out.', 'in_progress', 'high', 1),
('Export report to CSV', 'Add a button that downloads the monthly report as CSV.', 'open', 'medium', NULL),
('Upgrade database server', 'Move to the latest PostgreSQL minor version.', 'open', 'medium', 3),
('Broken image on homepage', 'The hero banner image returns a 404.', 'closed', 'low', 3);

INSERT INTO comments (ticket_id, user_id, content)
VALUES
(1, 2, 'Reproduced on staging, the error appears after the latest deploy.'),
(1, 1, 'Found the cause, a missing environment variable. Fix in progress.'),
(1, 3, 'Please add a regression test once this is fixed.'),
(2, 2, 'Legal approved the wording and it is now published.'),
(3, 3, 'Profiling shows the main query takes over four seconds.'),
(3, 1, 'Could we add an index on the comments table?'),
(5, 2, 'Typo corrected.'),
(6, 1, 'SMTP credentials expired, I have requested new ones.'),
(6, 4, 'Confirmed that no emails have gone out since Monday.'),
(8, 3, 'Maintenance window scheduled for Saturday night.');
COMMIT;