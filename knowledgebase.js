function generateResponse(input) {

    // =========================
    // DYSLEXIA SUPPORT MODULE
    // =========================
    if (
        input.includes("dyslexia") ||
        input.includes("reading difficulty") ||
        input.includes("spelling")
    ) {
        return `
🧠 <b>Dyslexia Support Guide</b><br><br>

• Break text into small chunks<br>
• Use simple and clear sentences<br>
• Read slowly and step by step<br>
• Highlight important keywords<br><br>

💡 Tip: Learning becomes easier when information is simplified.
        `;
    }

    // =========================
    // STUDY SUPPORT MODULE
    // =========================
    else if (
        input.includes("study") ||
        input.includes("learn") ||
        input.includes("revision")
    ) {
        return `
📚 <b>Study Support System</b><br><br>

• Focus on one topic at a time<br>
• Use bullet points for notes<br>
• Take short breaks (Pomodoro method)<br>
• Repeat important concepts<br><br>

💡 Tip: Consistency is more important than long hours.
        `;
    }

    // =========================
    // STRESS SUPPORT MODULE
    // =========================
    else if (
        input.includes("stress") ||
        input.includes("anxiety") ||
        input.includes("pressure")
    ) {
        return `
🌿 <b>Stress Management Support</b><br><br>

• Take deep breathing slowly<br>
• Focus on one task only<br>
• Avoid multitasking<br>
• Rest when overwhelmed<br><br>

💡 Tip: Small progress is still progress.
        `;
    }

    // =========================
    // GENERAL AI RESPONSE
    // =========================
    else {
        return `
✨ <b>General Support System</b><br><br>

I understand your input. Here is a simplified response:<br><br>

• Try using clear keywords<br>
• Break your question into parts<br>
• Be specific for better guidance<br><br>

💡 Example keywords:<br>
dyslexia, study, stress
        `;
    }
}
