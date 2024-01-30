const ROOT_URL = 'https://europe-west2-projectpartnersdigital.cloudfunctions.net/cwhrmehphz';

const subscribeUser = async (firstName: string, lastName: string | null, email: string) => {
    // Validate input
    if (!firstName || !email) {
        throw new Error('Missing required parameters');
    }
    if (email && !/.+@.+\..+/.test(email)) {
        throw new Error('Invalid email address');
    }

    type SubscribeRequest = {
        email: string;
        firstName: string;
        lastName?: string;
    };

    // Prepare payload
    const payload: SubscribeRequest = {
        email: email,
        firstName: firstName
    };

    if (lastName) {
        payload.lastName = lastName;
    }

    // Send request
    try {
        const response = await fetch(
            ROOT_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(payload)
            }
        )
            .then((res) => res.json())
            .then((res) => {
                return res;
            });

        // Check for errors
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        return await response.json();
    } catch (e: any) {
        throw new Error(`Network error: ${e.message}`);
    }
};

export default subscribeUser;