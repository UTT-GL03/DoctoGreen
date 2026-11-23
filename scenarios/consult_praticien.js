const visit = async (page) => {
  await page.goto('1de2cc29-8ee7-4891-ae78-dad162df2021', {
      waitUntil: 'networkidle',
  });
  await page.waitForTimeout(10000);
  await page.scrollToEnd();
  await page.waitForNetworkIdle();
  await page.waitForTimeout(7000);
};

module.exports = visit;