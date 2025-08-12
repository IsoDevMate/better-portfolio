# Sponsorship Feature Setup

This portfolio includes a sponsorship feature that allows visitors to support your work through Paystack payments.

## Features

- 💝 Heart-shaped sponsorship button in the hero section
- 🖥️ Terminal command: `sponsor` or `sponsor <amount>`
- 💳 Paystack payment integration
- 🎉 Success modal after successful payment
- 📱 Responsive design

## Setup Instructions

### 1. Paystack Account Setup

1. Create a Paystack account at [paystack.com](https://paystack.com)
2. Get your public key from the Paystack dashboard
3. Set up your webhook endpoints (optional but recommended)

### 2. Environment Configuration

Create a `.env` file in your project root:

```env
# Paystack Configuration
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here
VITE_SPONSOR_EMAIL=your-email@example.com
```

### 3. Update Email Address

In `src/components/ui/sponsor.jsx`, update the email address:

```javascript
email: 'your-email@example.com', // Replace with your email
```

### 4. Customize Sponsorship Options

You can customize the preset amounts in the `SponsorModal` component:

```javascript
const presetAmounts = [1, 5, 10, 25, 50, 100]; // Modify these values
```

### 5. Customize Sponsorship Messages

Update the sponsorship messages in:
- `src/components/ui/sponsor.jsx` - Modal content
- `src/pages/terminal.jsx` - Terminal command output

## Usage

### UI Sponsorship
- Click the heart-shaped button in the hero section
- Select an amount or enter a custom amount
- Complete payment through Paystack

### Terminal Sponsorship
- Type `sponsor` to see available options
- Type `sponsor 5` to directly sponsor $5
- Follow the payment flow

## Security Notes

- Never commit your actual Paystack secret key to version control
- Use environment variables for sensitive configuration
- Test thoroughly with Paystack's test mode before going live

## Customization

### Styling
The sponsorship button uses Tailwind CSS classes and can be customized in `src/components/ui/sponsor.jsx`.

### Payment Flow
The payment flow can be customized by modifying the `handleSponsor` function in the `SponsorModal` component.

### Success Handling
Customize the success modal and any post-payment actions in the `SponsorSuccess` component.

## Support

For Paystack integration issues, refer to the [Paystack documentation](https://paystack.com/docs).
