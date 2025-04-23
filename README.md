# LeetCode Stats Scraper

A tool that scrapes and extracts comprehensive statistics from a LeetCode profile page.

## 🌟 Features

- Extracts profile statistics:
  - Total problems solved
  - Problems solved by difficulty (Easy, Medium, Hard)
  - Current rank
  - Problems currently attempting
  - Submissions in the past year
- Captures profile information:
  - Location
  - University
  - Website
  - GitHub
  - LinkedIn
- Compiles recent successful submissions
- Lists programming languages used and problems solved with each
- Categorizes skills by level (Advanced, Intermediate, Fundamental)

## 🛠️ Technologies

- **Node.js** - JavaScript runtime environment
- **Puppeteer** - Headless browser automation library for web scraping
- **JavaScript** - Core programming language

## 📋 Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## 🚀 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/leetcode-stats.git
   cd leetcode-stats
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Usage

1. Open `scrapeLeetCode.js` and modify the profile URL to the desired LeetCode profile:
   ```javascript
   const profileURL = "https://leetcode.com/yourusername/";
   ```

2. Run the script:
   ```bash
   node scrapeLeetCode.js
   ```

3. The script will output scraped data in JSON format to the console.

4. (Optional) Save output to a file:
   ```bash
   node scrapeLeetCode.js > output.json
   ```

## 📊 Output Data Structure

The script generates a JSON object with the following structure:

```javascript
{
  "leetcode_profile_stats": {
    "total_solved": { "count": 123, "out_of": 2500 },
    "solved_by_difficulty": {
      "easy": { "count": 50, "out_of": 600 },
      "medium": { "count": 60, "out_of": 1300 },
      "hard": { "count": 13, "out_of": 600 }
    },
    "rank": 248770,
    "currently_attempting": 35,
    "submissions_past_year": 424
  },
  "profile_information": {
    "location": "Canada",
    "university": "Example University",
    "website": "example.com",
    "github": "github.com/username",
    "linkedin": "linkedin.com/in/username"
  },
  "recent_submissions": [
    { "title": "Problem Title", "time_ago": "1 day ago" }
  ],
  "languages_used": [
    { "name": "Python3", "count": 317 }
  ],
  "skills": {
    "advanced": [
      { "skill": "Dynamic Programming", "count": 42 }
    ],
    "intermediate": [
      { "skill": "Binary Search", "count": 25 }
    ],
    "fundamental": [
      { "skill": "Array", "count": 150 }
    ]
  },
  "performance_stats": {}
}
```

## ⚙️ Customization

### Adjusting Scraping Parameters

You can modify various parameters in the `scrapeLeetCode.js` file:

```javascript
const browser = await puppeteer.launch({
  headless: true, // Set to false to see the browser in action
  slowMo: 50,     // Slow down operations by X milliseconds
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
```

### Running in Headful Mode

For debugging purposes, you can set `headless: false` to watch the scraping process in a visible browser window.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This tool is for educational purposes only. Use responsibly and in accordance with LeetCode's terms of service. Web scraping may be against the terms of service of some websites.
