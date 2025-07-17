<<<<<<< HEAD
# ExpenseAudit AI

A sophisticated financial data analysis tool that uses **Benford's Law** to detect potential fraud or irregularities in expense data. Built with React, TypeScript, and modern web technologies.

## 🚀 Features

### ✅ Step 1: Data Upload & Preprocessing (Complete)
- **Multi-format Support**: Upload CSV, Excel (.xlsx, .xls), or JSON files
- **Smart Column Detection**: Automatically identifies Amount, Vendor, Date, and Category columns
- **Data Cleaning**: Removes invalid entries, normalizes currency formats, handles edge cases
- **Real-time Validation**: Live feedback on data quality and processing results
- **Interactive Preview**: View both raw and cleaned data with pagination

### ✅ Step 2: Benford's Law Analysis Engine (Complete)
- **First Digit Extraction**: Analyzes leading digits from all transaction amounts
- **Statistical Analysis**: Calculates Chi-square and MAD (Mean Absolute Deviation) scores
- **Fraud Detection**: Identifies suspicious vendors and transaction patterns
- **Risk Assessment**: Provides compliance ratings (Compliant, Acceptable, Suspicious, Highly Suspicious)
- **Detailed Reporting**: Comprehensive analysis with flagged transactions and vendor insights

### ✅ Step 3: Interactive Visualization Dashboard (Complete)

- **Risk Summary Cards**: At-a-glance overview of fraud detection results
- **Interactive Bar Chart**: Expected vs Actual digit distribution with hover tooltips
- **Vendor Analysis Table**: Sortable, filterable table of suspicious vendors with drill-down capability
- **Flagged Transactions Table**: Searchable, paginated table with export functionality
- **Deviation Heatmap**: Visual representation of vendor-digit deviation patterns
- **Export Reports**: Download comprehensive analysis results in JSON format
- **Real-time Filtering**: Dynamic search and filter capabilities across all data views

### ✅ Step 4: AI-Powered Natural Language Summary (Complete)

- **Rule-based AI Summary**: Intelligent analysis and interpretation of results
- **Google Gemini Integration**: Optional advanced AI summary with API key
- **Executive Summary**: Plain-English explanations of fraud detection findings
- **Risk Assessment**: Automated risk level determination with recommendations
- **Pattern Recognition**: AI-driven insights into suspicious transaction patterns
- **Export Integration**: AI summaries included in all export formats

### ✅ Step 5: Professional Export & Reporting (Complete)

- **PDF Report Generation**: Comprehensive, multi-page audit reports with professional formatting
- **Customizable Reports**: Configure content, branding, and report structure
- **Multiple Export Formats**: CSV exports for flagged transactions, vendor analysis, and cleaned datasets
- **Audit Trail**: Unique report IDs and metadata for compliance requirements
- **Professional Layout**: Cover pages, executive summaries, charts, and detailed analysis sections
- **Organization Branding**: Add company names and auditor information to reports

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS for modern, responsive UI
- **Data Processing**: PapaParse (CSV) + SheetJS (Excel)
- **Charts & Visualization**: Recharts for interactive data visualization
- **PDF Generation**: jsPDF + jsPDF-AutoTable + html2canvas for professional reports
- **AI Integration**: Google Gemini API for advanced natural language summaries
- **UI Components**: Lucide React icons + Custom components
- **File Upload**: React Dropzone

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🏃‍♂️ Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**: Navigate to `http://localhost:5173`

## 📁 Project Structure

```text
src/
├── components/              # React components
│   ├── ai/                  # AI summary components
│   ├── charts/              # Chart visualization components
│   ├── dashboard/           # Dashboard components
│   ├── tables/              # Data table components
│   ├── FileUpload.tsx       # Drag-and-drop file upload
│   ├── ColumnMapping.tsx    # Interactive column mapping
│   ├── DataPreview.tsx      # Data table with pagination
│   ├── Step1DataUpload.tsx  # Data upload workflow
│   ├── Step2BenfordAnalysis.tsx  # Analysis interface
│   ├── Step3VisualizationDashboard.tsx  # Dashboard
│   ├── Step4AISummary.tsx   # AI summary interface
│   └── Step5ExportReporting.tsx  # Export & reporting
├── hooks/                   # Custom React hooks
│   ├── useDataUpload.ts     # Data upload workflow
│   └── useBenfordAnalysis.ts # Analysis workflow
├── types/                   # TypeScript type definitions
│   └── index.ts
├── utils/                   # Utility functions
│   ├── dataProcessing.ts    # File parsing & data cleaning
│   ├── benfordAnalysis.ts   # Benford's Law calculations
│   ├── aiSummary.ts         # AI summary generation
│   ├── geminiIntegration.ts # Google Gemini API integration
│   ├── pdfReportGenerator.ts # PDF report generation
│   ├── reportExporter.ts    # Export utilities
│   └── cn.ts               # CSS class utilities
└── App.tsx                 # Main application
```

## 🎯 Complete Workflow

### Step 1: Upload Your Data

1. **Prepare your data**: Ensure your file contains financial data with amount values
2. **Upload**: Drag and drop or click to browse for CSV, Excel, or JSON files
3. **Review**: Check the automatic column detection

### Step 2: Map Columns

1. **Required**: Map the "Amount" column (required for analysis)
2. **Optional**: Map Vendor, Date, and Category columns for enhanced insights
3. **Validate**: Review the mapping and proceed

### Step 3: Preview & Validate

1. **Raw Data**: Review your original data
2. **Cleaned Data**: See the processed, cleaned dataset
3. **Statistics**: Check validation results and data quality metrics

### Step 4: Benford's Law Analysis

1. **Statistical Analysis**: Automatic calculation of digit frequencies and deviations
2. **Risk Assessment**: Identification of suspicious vendors and transactions
3. **Results Review**: Detailed analysis with compliance ratings

### Step 5: Interactive Dashboard

1. **Visual Analysis**: Interactive charts showing expected vs actual digit distributions
2. **Vendor Investigation**: Sortable tables with suspicious vendor patterns
3. **Transaction Drilling**: Detailed flagged transaction exploration
4. **Heatmap Analysis**: Visual representation of vendor-digit deviations

### Step 6: AI-Powered Summary

1. **Automated Analysis**: Rule-based AI interpretation of results
2. **Natural Language Summary**: Plain-English explanations of findings
3. **Optional Gemini Integration**: Advanced AI analysis with API key
4. **Risk Assessment**: Automated risk level determination

### Step 7: Professional Reporting

1. **PDF Report Generation**: Comprehensive, audit-ready reports
2. **Custom Configuration**: Choose report content and branding
3. **Multiple Export Formats**: CSV exports for detailed investigation
4. **Compliance Ready**: Audit trails and metadata for regulatory requirements

## 📊 Supported Data Formats

### CSV Example

```csv
Amount,Vendor,Date,Category
1234.56,ABC Corp,2024-01-15,Office Supplies
987.65,XYZ Ltd,2024-01-16,Travel
```

### Excel/JSON

Similar structure with columns for Amount (required), Vendor, Date, and Category.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

This project follows strict TypeScript and ESLint configurations:

- No `any` types (use `unknown` instead)
- Proper accessibility attributes
- Consistent code formatting
- Type-safe props and state management

## 🤝 Contributing

All five steps of ExpenseAudit AI are now complete! The application provides a full fraud detection pipeline from data upload to professional reporting.

## 📄 License

MIT License - see LICENSE file for details

## 🎉 Acknowledgments

- Built with modern React patterns and TypeScript
- Uses industry-standard libraries for data processing and PDF generation
- Designed for real-world financial audit and compliance needs
- Implements Benford's Law for statistical fraud detection

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# ExpenseAudit-AI
AI-powered platform for financial anomaly detection using Benford’s Law, AI Analysis, and secure role-based controls.
>>>>>>> 158ac8c7ebb606317926a642c56ae6d816ceb31b
