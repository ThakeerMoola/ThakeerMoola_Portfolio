  // Add an event listener to the form submission
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
      // Trigger Swal.fire after form submission
      Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success"
      }).then(() => {
          // After the user acknowledges the Swal.fire message, submit the form
          event.target.submit();
      });
  });
