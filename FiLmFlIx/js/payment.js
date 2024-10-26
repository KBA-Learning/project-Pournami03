const paymentMethodForm = document.getElementById('payment-method-form');
        const paymentFields = document.getElementById('payment-fields');
        const proceedPaymentBtn = document.getElementById('proceed-payment-btn');

        // Listen for payment method selection
        paymentMethodForm.addEventListener('change', function (e) {
            const selectedMethod = e.target.value;

            // Hide all fields initially
            document.getElementById('net-banking-fields').classList.add('hidden');
            document.getElementById('gpay-fields').classList.add('hidden');
            document.getElementById('card-fields').classList.add('hidden');
            paymentFields.classList.remove('hidden');
            proceedPaymentBtn.classList.remove('hidden');

            // Show the fields based on the selected method
            if (selectedMethod === 'net-banking') {
                document.getElementById('net-banking-fields').classList.remove('hidden');
            } else if (selectedMethod === 'gpay') {
                document.getElementById('gpay-fields').classList.remove('hidden');
            } else if (selectedMethod === 'card') {
                document.getElementById('card-fields').classList.remove('hidden');
            }
        });


        // Handle the "Proceed to Payment" button click
        proceedPaymentBtn.addEventListener('click', function () {
            // Add a slight delay to simulate processing
            setTimeout(() => {
                // Redirect to the payment success page
                window.location.href = 'payment-success.html';
            }, 500); // Delay of 500ms to mimic processing
        });