const puppeteer = require('puppeteer');

async function scrapeLeetCode() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();

    // Navigate to the profile page
    const profileURL = 'https://leetcode.com/kianis4/';
    await page.goto(profileURL, { waitUntil: 'networkidle2' });

    // Extract full text content
    const pageText = await page.evaluate(() => document.body.innerText);

    // Use regex to extract key numbers
    const easyMatch = pageText.match(/Easy\s*(\d+)\/(\d+)/);
    const mediumMatch = pageText.match(/Med\.\s*(\d+)\/(\d+)/);
    const hardMatch = pageText.match(/Hard\s*(\d+)\/(\d+)/);
    const submissionsMatch = pageText.match(/(\d+)\s*submissions in the past one year/);
    const maxStreakMatch = pageText.match(/Max streak:\s*(\d+)/);

    // Convert to numbers for calculation
    const easySolved = easyMatch ? parseInt(easyMatch[1], 10) : 0;
    const mediumSolved = mediumMatch ? parseInt(mediumMatch[1], 10) : 0;
    const hardSolved = hardMatch ? parseInt(hardMatch[1], 10) : 0;
    
    // Compute Total Solved
    const totalSolved = easySolved + mediumSolved + hardSolved;

    // Store results
    const stats = {
        totalSolved: `${totalSolved}`, // No longer relies on failing extraction
        easySolved: `${easySolved} / ${easyMatch ? easyMatch[2] : 'N/A'}`,
        mediumSolved: `${mediumSolved} / ${mediumMatch ? mediumMatch[2] : 'N/A'}`,
        hardSolved: `${hardSolved} / ${hardMatch ? hardMatch[2] : 'N/A'}`,
        submissionsPastYear: submissionsMatch ? submissionsMatch[1] : 'N/A',
        maxStreak: maxStreakMatch ? maxStreakMatch[1] : 'N/A',
    };

    console.log('✅ Scraped LeetCode Stats:', stats);

    await browser.close();
    return stats;
}

// Run script when executed directly
if (require.main === module) {
    scrapeLeetCode().then(console.log).catch(console.error);
}

module.exports = scrapeLeetCode;