const {Builder, By} = require('selenium-webdriver');

const browser = 'safari';

(async function start() {
	const driver = await new Builder().forBrowser(browser).build();
	await driver.get('http://localhost:3000/#/');

	await driver.manage().window().maximize()

	// console.log(await driver.actions().mouse().moveTo())

	async function test_invalid_credentials() {
		try {
			const loginModalButton = await driver.findElement(By.id("login-modal-button"))
			// Click the "Login" button
			await driver.executeScript("arguments[0].click();", loginModalButton)
			// Fill the email address
			const emailInput = driver.findElement(By.id('email-input'));
			await emailInput.sendKeys('varunirani0505@gmail.com')
			// Fill the incorrect password
			const passwordInput = await driver.findElement(By.id('password-input'))
			await passwordInput.sendKeys('varun_irani')
			// Click Submit
			const submitButton = await driver.findElement(By.id("submit-login"))
			await driver.executeScript("arguments[0].click()", submitButton);
			setTimeout(async function () {
				const closeButton = await driver.findElement(By.className("close"))
				await driver.executeScript("arguments[0].click()", closeButton);
			}, 2 * 1000)
			setTimeout(test_valid_credentials, 5 * 1000)
		} catch (e) {
		}
	}

	async function test_valid_credentials() {
		const loginModalButton = await driver.findElement(By.id("login-modal-button"))
		// Click the "Login" button
		await driver.executeScript("arguments[0].click();", loginModalButton)
		// Fill the email address
		const emailInput = driver.findElement(By.id('email-input'));
		await emailInput.sendKeys('varunirani0505@gmail.com')
		// Fill the correct password
		const passwordInput = await driver.findElement(By.id('password-input'))
		await passwordInput.sendKeys('varun@irani')
		// Click Submit
		const submitButton = await driver.findElement(By.id("submit-login"))
		await driver.executeScript("arguments[0].click()", submitButton);
		setTimeout(test_watch_trailer, 20 * 1000)
	}

	async function test_watch_trailer() {
		const watchTrailerButton = await driver.findElement(By.id("watch-trailer-button"))
		await driver.executeScript("arguments[0].click()", watchTrailerButton);
		setTimeout(async function () {
			const closeButton = await driver.findElement(By.className("close"))
			await driver.executeScript("arguments[0].click()", closeButton);
		}, 7 * 1000)
		setTimeout(test_movie_click, 10 * 1000)
	}

	async function test_movie_click() {
		const movieCardImage = await driver.findElement(By.className("movie-card-img"))
		await driver.executeScript("arguments[0].click()", movieCardImage);
		setTimeout(async function () {
			const writeReviewButton = await driver.findElement(By.id("write-review-button"))
			await driver.executeScript("arguments[0].click()", writeReviewButton);
			const ratingButton = await driver.findElement(By.css('label[for="rating-9"]'))
			const {x, y} = await ratingButton.getRect()
			await driver.actions().mouse().move({x, y, duration: 3000})
			const commentBox = await driver.findElement(By.id('comment-box'))
			await commentBox.sendKeys('I really enjoyed this movie! Both the hero and the villain played their part really well.')
			const submitReview = await driver.findElement(By.id('submit-review'))
			await driver.executeScript("arguments[0].click()", submitReview);
		}, 7 * 1000)
		setTimeout(test_logout, 17 * 1000)
	}

	async function test_logout() {
		const logoutButton = await driver.findElement(By.id("logout-button"))
		await driver.executeScript("arguments[0].click()", logoutButton);
		setTimeout(() => {
		}, 10 * 1000)
	}

	await test_invalid_credentials();

})();


