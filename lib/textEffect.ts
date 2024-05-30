const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const intervalTime: number = 30; // Interval time in milliseconds
    const delayTime: number = 3000; // Delay time before changing to the next value
    let interval: number | null = null;
    const values: string[] = ["DEVELOPER", "ENGINEER", "DESIGNER"];
    let currentIndex: number = 0;

    export function changeText(): void {
      const span: HTMLElement | null = document.querySelector("span");
      if (!span) return; // Check if span exists
      span.dataset.value = values[currentIndex];
      currentIndex = (currentIndex + 1) % values.length;
      let iteration: number = 0;

      clearInterval(interval as number);

      interval = window.setInterval(() => {
        if (!span.dataset.value) return; // Check if span.dataset.value exists

        span.innerText = span.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return span.dataset.value![index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= span.dataset.value.length) {
          clearInterval(interval as number);

          // Change to the next value after a short delay
          setTimeout(changeText, delayTime);
        }

        iteration += 1 / 3;
      }, intervalTime);
    }

    // Run the effect as soon as the page is loaded
    window.onload = changeText;