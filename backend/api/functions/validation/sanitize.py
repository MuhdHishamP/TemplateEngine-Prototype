from django.utils.html import escape


def SanitizeData(data):
    sanitized_data = {}
    for key, value in data.items():
        if isinstance(value, str):
            # Escape HTML characters in string values
            sanitized_data[key] = escape(value)
        elif isinstance(value, dict):
            # Recursively sanitize nested dictionaries
            sanitized_data[key] = SanitizeData(value)
        elif isinstance(value, list):
            # Sanitize each element in the list
            sanitized_data[key] = [escape(item) if isinstance(item, str) else item for item in value]
        else:
            sanitized_data[key] = value
    return sanitized_data
