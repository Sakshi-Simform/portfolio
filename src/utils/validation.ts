export function validateName(name: string): string | null {
    name = name.trim();
    if (!name) return "Please provide your name";
    if (name.length > 20) return "Name must not exceed 20 characters";
    if (!/^[a-zA-Z][a-zA-Z ]*$/.test(name))
        return "Name must only contain letters and spaces (not starting with a space)";
    return null;
}

export function validateEmail(email: string): string | null {
    email = email.trim();
    if (!email) return "Please provide an email";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return "Invalid Email";
    }
    return null;
}

export function validateMessage(message: string): string | null {
    message = message.trim();
    if (!message) return "Message is required.";
    if (message.length > 500) return "Message must not exceed 500 characters";
    return null;
}