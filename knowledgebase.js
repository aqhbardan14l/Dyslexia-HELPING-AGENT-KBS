function generateResponse(input) {

    // =========================
    // DYSLEXIA MODULE
    // =========================
    if (
        input.includes("dyslexia") ||
        input.includes("reading difficulty") ||
        input.includes("spelling") ||
        input.includes("word recognition")
    ) {
        return `
🧠 <b>Dyslexia Support</b><br><br>

• Break information into small parts<br>
• Use simple words<br>
• Highlight keywords<br>
• Read slowly and step by step<br><br>

💡 Focus: Improve readability through simplification.
        `;
    }

    // =========================
    // STUDY MODULE
    // =========================
    else if (
        input.includes("study") ||
        input.includes("learn") ||
        input.includes("revision")
    ) {
        return `
📚 <b>Study Support</b><br><br>

• Use short study sessions<br>
• Summarize notes<br>
• Focus on one topic<br>
• Avoid multitasking<br><br>

💡 Tip: Consistency > long hours
        `;
    }

    // =========================
    // STRESS / EMOTION MODULE
    // =========================
    else if (
        input.includes("stress") ||
        input.includes("anxiety") ||
        input.includes("pressure") ||
        input.includes("overwhelmed")
    ) {
        return `
🌿 <b>Emotional Support</b><br><br>

• Take deep breaths<br>
• Rest when tired<br>
• Focus on one task<br>
• Don’t rush yourself<br><br>

💡 Small progress is still progress
        `;
    }

    // =========================
    // MEMORY MODULE
    // =========================
    else if (
        input.includes("memory") ||
        input.includes("forget") ||
        input.includes("remember")
    ) {
        return `
🧠 <b>Memory Support</b><br><br>

• Use repetition techniques<br>
• Break info into chunks<br>
• Use visual learning<br>
• Revise frequently<br><br>

💡 Tip: Repetition strengthens memory.
        `;
    }

    // =========================
    // FOCUS MODULE
    // =========================
    else if (
        input.includes("focus") ||
        input.includes("attention") ||
        input.includes("concentrate")
    ) {
        return `
🎯 <b>Focus Support</b><br><br>

• Remove distractions<br>
• Work in short intervals<br>
• Take regular breaks<br>
• Set small goals<br><br>

💡 Tip: One task at a time works best.
        `;
    }

    // =========================
    // GENERAL SYSTEM
    // =========================
    else {
        return `
✨ <b>General Support System</b><br><br>

I can help with learning difficulties, study support, memory, focus, and emotional stress.<br><br>

💡 Try keywords like:<br>
dyslexia, study, stress, memory, focus
        `;
    }
}
