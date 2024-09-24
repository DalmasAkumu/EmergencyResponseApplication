import React from 'react';

const FirstAid = () => {
    return (
        <div style={{ 
            padding: '20px', 
            fontFamily: 'Times New Roman, serif', // Changed to Times New Roman
            backgroundColor: '#e9f5ff', // Light background for a calming effect
            color: '#2e2e2e' // Darker text for better readability
        }}>
            <h1 style={{ color: '#333', textAlign: 'center' }}>First Aid Guide</h1>
            <section style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#006400' }}>Introduction to First Aid</h2>
                <p style={{ lineHeight: '1.6' }}>
                    First aid refers to the immediate and temporary care provided to an individual who is injured or ill 
                    until professional medical assistance is available. It plays a critical role in health emergencies 
                    as it can stabilize a person's condition, prevent complications, and potentially save lives. 
                    This guide offers step-by-step instructions for managing common medical emergencies safely and effectively, 
                    enabling individuals to act confidently in urgent situations.
                </p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h2 style={{ color: '#006400' }}>Common Emergencies and First Aid Instructions</h2>

                <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h3>A. Cardiac Arrest (CPR)</h3>
                    <p>
                        <strong>Recognizing Cardiac Arrest:</strong> Cardiac arrest occurs when the heart suddenly stops beating, 
                        leading to loss of consciousness and absence of normal breathing. Signs include:
                        <ul style={{ marginLeft: '20px' }}>
                            <li>Unresponsiveness: The person does not respond to stimuli.</li>
                            <li>No breathing: The person is not breathing normally (only gasping).</li>
                            <li>Pale or bluish skin: Lack of oxygen can lead to a bluish hue around the lips and fingertips.</li>
                        </ul>
                    </p>
                    <h4>Step-by-Step Instructions:</h4>
                    <ol style={{ marginLeft: '20px' }}>
                        <li><strong>Call for Emergency Help:</strong> Immediately call emergency services using the SOS button.</li>
                        <li><strong>Check for Responsiveness:</strong> Gently tap the person and shout, “Are you okay?”</li>
                        <li><strong>Begin Chest Compressions:</strong> If unresponsive, place the heel of one hand in the center of the chest and the other hand on top. 
                            Push hard and fast (at least 2 inches deep at a rate of 100-120 compressions per minute).
                        </li>
                        <li><strong>Provide Rescue Breaths:</strong> After 30 compressions, open the airway by tilting the head back slightly, pinch the nose shut, and give 2 breaths (1 second each) while watching for chest rise.</li>
                        <li><strong>Continue CPR:</strong> Alternate between 30 chest compressions and 2 rescue breaths until help arrives or the person starts breathing normally.</li>
                    </ol>
                    <video controls>
                        <source src="URL_TO_CPR_VIDEO" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    <h3>B. Severe Bleeding</h3>
                    <p>
                        <strong>Recognizing Severe Bleeding:</strong> Severe bleeding can be life-threatening and requires immediate attention. Signs include:
                        <ul style={{ marginLeft: '20px' }}>
                            <li>Gushing or spurting blood from a wound.</li>
                            <li>Blood soaking through bandages or clothing.</li>
                            <li>Pale skin or signs of shock (rapid pulse, confusion, weakness).</li>
                        </ul>
                    </p>
                    <h4>Step-by-Step Instructions:</h4>
                    <ol style={{ marginLeft: '20px' }}>
                        <li><strong>Call for Emergency Help:</strong> Use the SOS button to notify emergency services.</li>
                        <li><strong>Apply Direct Pressure:</strong> Use a clean cloth, bandage, or your hands to apply firm pressure directly on the wound to help stop the bleeding.</li>
                        <li><strong>Elevate the Injured Area:</strong> If possible, raise the injured area above the level of the heart to help slow the bleeding.</li>
                        <li><strong>Do Not Remove Objects:</strong> If an object is embedded in the wound, do not attempt to remove it; apply pressure around it.</li>
                        <li><strong>Continue Applying Pressure:</strong> Maintain pressure until emergency help arrives or bleeding stops.</li>
                    </ol>
                    <video controls>
                        <source src="URL_TO_BLEEDING_VIDEO" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Continue with similar sections for Choking, Burns, etc. */}

            </section>

            <section>
                <h2 style={{ color: '#006400' }}>Additional Resources</h2>
                <p style={{ lineHeight: '1.6' }}>
                    For further information and detailed training, consider accessing the following resources:
                </p>
                <ul style={{ marginLeft: '20px' }}>
                    <li>
                        <a href="URL_TO_REDDIT" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Red Cross First Aid Resources</a> - A comprehensive guide to first aid procedures.
                    </li>
                    <li>
                        <a href="URL_TO_YOUTUBE" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>CPR Training Videos</a> - Visual aids and tutorials on performing CPR.
                    </li>
                    <li>
                        <a href="URL_TO_FIRST_AID_KIT" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Recommended First Aid Kits</a> - Essential items for first aid preparedness.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default FirstAid;
