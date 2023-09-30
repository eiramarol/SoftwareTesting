const Mocha = require('mocha');
const { Mochawesome } = require('mochawesome');
const path = require('path');
const reportDir = path.join(__dirname, 'mochawesome-report'); // Construct the absolute path

// Create a new Mocha test runner instance
const mocha = new Mocha({
    reporter: 'mochawesome', // Use the mochawesome reporter
    reporterOptions: {
        reportDir: reportDir, // Output directory for the report
        reportTitle: 'Test Report', // Title for the report
        reportPageTitle: 'My Test Suite', // Page title in the report
        overwrite: true // Overwrite existing report files
    }
});

// Add your test scripts using `addFile`
mocha.addFile('test/1verify_ValidLogin.js');
mocha.addFile('test/2verify_Email_and_pw_Labels.js');
mocha.addFile('test/3verify_invalidEmail_error.js');

// Run the tests
mocha.run(async () => {
    console.log('All tests are completed.');
    console.log('Report directory:', reportDir);
    // After tests are executed, generate the Mochawesome HTML report
    await generateMochawesomeReport();
});
