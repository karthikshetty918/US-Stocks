let symbols = [["Old Symbol", "New Symbol"]]; // Header row

$(".table-wrap tbody tr").each(function() {
    let oldSymbol = $(this).find("td:nth-child(2)").text().trim();
    let newSymbol = $(this).find("td:nth-child(3) a").text().trim() || $(this).find("td:nth-child(3)").text().trim();
    
    symbols.push([oldSymbol, newSymbol]);
});

// Convert to CSV format
let csvContent = symbols.map(e => e.join(",")).join("\n");

// Create a Blob and trigger download
let blob = new Blob([csvContent], { type: "text/csv" });
let url = URL.createObjectURL(blob);
let a = document.createElement("a");
a.href = url;
a.download = "symbols.csv";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
