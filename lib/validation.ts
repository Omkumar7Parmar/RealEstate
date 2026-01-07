export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (data: {
  name: string;
  email: string;
  message: string;
}): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

export const validateLoginForm = (data: {
  email: string;
  password: string;
}): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export const validateRegisterForm = (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
