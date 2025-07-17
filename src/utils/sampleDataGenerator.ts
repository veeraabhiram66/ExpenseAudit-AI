/**
 * Sample data generator for testing ExpenseAudit AI
 * Generates realistic financial transaction data with some intentionally suspicious patterns
 */

export interface SampleTransaction {
  amount: number;
  vendor: string;
  date: string;
  category: string;
  description?: string;
}

export interface SampleDataConfig {
  totalTransactions: number;
  suspiciousVendorPercentage: number;
  dateRangeMonths: number;
  includeNaturalPatterns: boolean;
}

const VENDOR_NAMES = [
  'ABC Corporation', 'XYZ Industries', 'Global Supplies Inc', 'TechCorp Solutions',
  'Office Depot', 'Professional Services LLC', 'Metro Transit', 'City Utilities',
  'QuickMart', 'Premier Catering', 'Elite Consulting', 'Standard Equipment',
  'Digital Solutions', 'Corporate Travel', 'Express Delivery', 'Quality Supplies'
];

const SUSPICIOUS_VENDORS = [
  'Shell Company A', 'Round Numbers Ltd', 'Digit Manipulation Corp',
  'Fraudulent Patterns Inc', 'Artificial Vendor Co'
];

const CATEGORIES = [
  'Office Supplies', 'Travel', 'Utilities', 'Consulting', 'Equipment',
  'Software', 'Meals', 'Transportation', 'Professional Services', 'Maintenance'
];

/**
 * Generates a random amount that follows natural distribution (favoring lower amounts)
 */
function generateNaturalAmount(): number {
  const randomType = Math.random();
  
  if (randomType < 0.5) {
    // Small amounts (50% of transactions): $10 - $500
    return Math.random() * 490 + 10;
  } else if (randomType < 0.8) {
    // Medium amounts (30% of transactions): $500 - $5,000
    return Math.random() * 4500 + 500;
  } else if (randomType < 0.95) {
    // Large amounts (15% of transactions): $5,000 - $50,000
    return Math.random() * 45000 + 5000;
  } else {
    // Very large amounts (5% of transactions): $50,000 - $500,000
    return Math.random() * 450000 + 50000;
  }
}

/**
 * Generates suspicious amounts that violate Benford's Law
 * (e.g., too many round numbers, artificial patterns)
 */
function generateSuspiciousAmount(): number {
  const suspiciousType = Math.random();
  
  if (suspiciousType < 0.4) {
    // Round numbers (violates Benford's Law)
    const roundBases = [1000, 2000, 3000, 4000, 5000, 10000, 15000, 20000, 25000, 30000];
    return roundBases[Math.floor(Math.random() * roundBases.length)];
  } else if (suspiciousType < 0.7) {
    // Numbers starting with 4, 5, 6 (over-represented)
    const suspiciousDigits = [4, 5, 6];
    const digit = suspiciousDigits[Math.floor(Math.random() * suspiciousDigits.length)];
    const magnitude = Math.pow(10, Math.floor(Math.random() * 4) + 2); // $100 to $100,000
    return digit * magnitude + Math.random() * magnitude * 0.99;
  } else {
    // Just below round numbers (common fraud pattern)
    const bases = [1000, 5000, 10000, 25000, 50000];
    const base = bases[Math.floor(Math.random() * bases.length)];
    return base - Math.random() * 100; // e.g., $4,950 instead of $5,000
  }
}

/**
 * Generates a random date within the specified range
 */
function generateRandomDate(monthsBack: number): string {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth() - monthsBack, 1);
  const randomTime = startDate.getTime() + Math.random() * (now.getTime() - startDate.getTime());
  return new Date(randomTime).toISOString().split('T')[0];
}

/**
 * Generates sample transaction data for testing
 */
export function generateSampleData(config: SampleDataConfig): SampleTransaction[] {
  const transactions: SampleTransaction[] = [];
  const suspiciousCount = Math.floor(config.totalTransactions * config.suspiciousVendorPercentage / 100);
  
  // Generate normal transactions
  for (let i = 0; i < config.totalTransactions - suspiciousCount; i++) {
    const vendor = VENDOR_NAMES[Math.floor(Math.random() * VENDOR_NAMES.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    
    transactions.push({
      amount: config.includeNaturalPatterns ? generateNaturalAmount() : generateSuspiciousAmount(),
      vendor,
      date: generateRandomDate(config.dateRangeMonths),
      category,
      description: `${category} purchase from ${vendor}`
    });
  }
  
  // Generate suspicious transactions
  for (let i = 0; i < suspiciousCount; i++) {
    const vendor = SUSPICIOUS_VENDORS[Math.floor(Math.random() * SUSPICIOUS_VENDORS.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    
    transactions.push({
      amount: generateSuspiciousAmount(),
      vendor,
      date: generateRandomDate(config.dateRangeMonths),
      category,
      description: `${category} purchase from ${vendor}`
    });
  }
  
  // Shuffle the transactions
  for (let i = transactions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [transactions[i], transactions[j]] = [transactions[j], transactions[i]];
  }
  
  return transactions;
}

/**
 * Converts sample data to CSV format
 */
export function convertToCSV(transactions: SampleTransaction[]): string {
  const headers = ['Amount', 'Vendor', 'Date', 'Category', 'Description'];
  const csvLines = [headers.join(',')];
  
  transactions.forEach(transaction => {
    const line = [
      transaction.amount.toFixed(2),
      `"${transaction.vendor}"`,
      transaction.date,
      `"${transaction.category}"`,
      `"${transaction.description || ''}"`
    ].join(',');
    csvLines.push(line);
  });
  
  return csvLines.join('\n');
}

/**
 * Downloads sample data as CSV file
 */
export function downloadSampleData(config: SampleDataConfig, filename: string = 'sample_expense_data.csv'): void {
  const transactions = generateSampleData(config);
  const csv = convertToCSV(transactions);
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

/**
 * Predefined sample data configurations
 */
export const SAMPLE_CONFIGS = {
  small: {
    totalTransactions: 100,
    suspiciousVendorPercentage: 15,
    dateRangeMonths: 6,
    includeNaturalPatterns: true
  },
  medium: {
    totalTransactions: 500,
    suspiciousVendorPercentage: 20,
    dateRangeMonths: 12,
    includeNaturalPatterns: true
  },
  large: {
    totalTransactions: 1000,
    suspiciousVendorPercentage: 25,
    dateRangeMonths: 24,
    includeNaturalPatterns: true
  },
  fraudulent: {
    totalTransactions: 300,
    suspiciousVendorPercentage: 60,
    dateRangeMonths: 6,
    includeNaturalPatterns: false
  }
} as const;
