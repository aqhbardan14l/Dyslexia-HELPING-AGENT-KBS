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
function generateResponse(input) {

    input = input.toLowerCase();

    // =========================
    // 🧠 DYSLEXIA / READING INTENT
    // =========================
    if (
        input.includes("dyslexia") ||
        input.includes("reading") ||
        input.includes("read") ||
        input.includes("reading difficulty") ||
        input.includes("reading problem") ||
        input.includes("cannot read") ||
        input.includes("hard to read") ||
        input.includes("slow reader") ||
        input.includes("spelling") ||
        input.includes("spell") ||
        input.includes("word") ||
        input.includes("letters mix") ||
        input.includes("confuse letters") ||
        input.includes("b/d confusion") ||
        input.includes("p/q confusion") ||
        input.includes("word recognition") ||
        input.includes("text hard") ||
        input.includes("sentence hard")
    ) {
        return `
🧠 <b>Dyslexia Support System</b><br><br>

• Break information into small chunks<br>
• Use simple and clear sentences<br>
• Highlight keywords<br>
• Read slowly step by step<br>
• Avoid long paragraphs<br>
• Use spacing between words<br><br>

💡 Tip: Simplified text improves understanding significantly.
        `;
    }

    // =========================
    // 📚 STUDY / LEARNING INTENT
    // =========================
    else if (
        input.includes("study") ||
        input.includes("learn") ||
        input.includes("learning") ||
        input.includes("revision") ||
        input.includes("revise") ||
        input.includes("exam") ||
        input.includes("test") ||
        input.includes("study method") ||
        input.includes("study tips") ||
        input.includes("how to study") ||
        input.includes("homework") ||
        input.includes("assignment") ||
        input.includes("notes") ||
        input.includes("memorize")
    ) {
        return `
📚 <b>Study Support System</b><br><br>

• Focus on one topic at a time<br>
• Use bullet points for notes<br>
• Apply Pomodoro technique (25 min study)<br>
• Revise regularly<br>
• Avoid multitasking<br>
• Make short summaries<br><br>

💡 Tip: Smart study is better than long study.
        `;
    }

    // =========================
    // 🌿 STRESS / EMOTION INTENT
    // =========================
    else if (
        input.includes("stress") ||
        input.includes("anxiety") ||
        input.includes("pressure") ||
        input.includes("overwhelmed") ||
        input.includes("burnout") ||
        input.includes("tired") ||
        input.includes("exhausted") ||
        input.includes("mental") ||
        input.includes("sad") ||
        input.includes("frustrated") ||
        input.includes("panic") ||
        input.includes("worried")
    ) {
        return `
🌿 <b>Emotional Support System</b><br><br>

• Take deep breaths slowly<br>
• Pause and rest<br>
• Focus on one task only<br>
• Do not rush yourself<br>
• Step away if overwhelmed<br><br>

💡 Tip: Your mental health is important.
        `;
    }

    // =========================
    // 🧠 MEMORY INTENT
    // =========================
    else if (
        input.includes("memory") ||
        input.includes("forget") ||
        input.includes("forgot") ||
        input.includes("remember") ||
        input.includes("remembering") ||
        input.includes("forgetful") ||
        input.includes("hard to remember")
    ) {
        return `
🧠 <b>Memory Support System</b><br><br>

• Repeat information often<br>
• Use visual learning (images/diagrams)<br>
• Break into small chunks<br>
• Use association technique<br>
• Revise frequently<br><br>

💡 Tip: Repetition strengthens memory.
        `;
    }

    // =========================
    // 🎯 FOCUS INTENT
    // =========================
    else if (
        input.includes("focus") ||
        input.includes("attention") ||
        input.includes("concentrate") ||
        input.includes("distracted") ||
        input.includes("cannot focus") ||
        input.includes("lose focus") ||
        input.includes("not focus") ||
        input.includes("hard to concentrate")
    ) {
        return `
🎯 <b>Focus Support System</b><br><br>

• Remove distractions (phone, noise)<br>
• Work in short sessions<br>
• Set small goals<br>
• Take regular breaks<br>
• Create quiet environment<br><br>

💡 Tip: Focus improves with structure.
        `;
    }

    // =========================
    // ✨ GENERAL SYSTEM
    // =========================
    else {
        return `
✨ <b>General Support System</b><br><br>

I can help with:<br>
• Reading difficulties<br>
• Study techniques<br>
• Memory improvement<br>
• Focus problems<br>
• Emotional support<br><br>

💡 Try using clear keywords for better results.
        `;
    }
}
