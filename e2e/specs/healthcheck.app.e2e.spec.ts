describe('Health', () => {
  test('Sites', async () => {
    const response = await fetch('http://sites:3000');
    expect(response.ok).toBeTruthy();
  });
});
