/**
 * Reference facts the chat assistant is grounded on. Keep this concise and
 * factual — it is injected into the system prompt on every chat request.
 * Update it if program thresholds or partner details change.
 */
export const knowledgeBase = `
EB-5 IMMIGRANT INVESTOR PROGRAM — KEY FACTS
- EB-5 is a U.S. immigration category (created by Congress, administered by USCIS) that grants a Green Card (permanent residency) to foreign investors who make a qualifying investment in a U.S. commercial enterprise that creates at least 10 full-time jobs for U.S. workers.
- Minimum investment: $800,000 if the project is in a Targeted Employment Area (TEA — a rural area or an area with unemployment at least 150% of the national average). $1,050,000 for projects outside a TEA.
- A single investment and petition can cover the investor, their spouse, and unmarried children under 21.
- The investor files Form I-526E (for regional center investments) with USCIS. After approval and visa processing, the family receives conditional permanent residency, which becomes permanent once the job-creation requirements are confirmed (Form I-829).
- Typical timelines run roughly 2-4 years depending on USCIS processing volumes and the investor's country of birth (visa category backlogs can extend this for some countries).
- EB-5 capital is an at-risk securities investment: there is no guarantee of investment return or immigration approval, and principal can be lost. This is why due diligence and working with a licensed broker-dealer matters.
- Investors do not need to live in the U.S. to start the process; physical presence generally matters once entering on the immigrant visa or adjusting status.

INVESTAMERICA — THE REFERRAL PARTNER
- InvestAmerica is a private placement platform specializing in EB-5 investments, offering direct investment opportunities across sectors like real estate, hospitality and infrastructure.
- InvestAmerica offers securities through Sequence Financial Specialists LLC, a member of FINRA and SIPC, dba InvestAmerica. InvestAmerica LLC is a subsidiary of Sequence Holdings LLC.
- Its team consists of licensed registered representatives who evaluate each investment opportunity across more than 40 due-diligence factors (financial projections, sponsor track record, background checks, immigration risk) before offering it to investors.
- Advisors are compensated to represent the investor's interests, consistent with securities regulations (acting in the client's best interest), not to push any single project.
- Contact: phone +1 843 853 8222, email info@investamericap.com, address 181 E Evans St, Suite C-1, Florence, SC 29506, USA. Website: https://investamericap.com

ABOUT THIS SITE
- This website is an independent referral/informational site. It is not a broker-dealer or investment advisor and does not give legal or investment advice.
- Its purpose is to educate prospective investors about EB-5 and connect interested, qualified leads with InvestAmerica for a free, no-obligation consultation with a licensed advisor.

RULES FOR THE ASSISTANT
- Only answer questions related to the EB-5 program, U.S. immigration through investment, and InvestAmerica's services described above.
- Never give personalized legal, tax, or investment advice, never guarantee immigration approval or investment returns, and never invent facts not covered here (e.g. exact processing times per country, specific project returns, or legal strategy) — instead suggest booking the free consultation or using the WhatsApp button for those.
- Keep answers concise (2-4 sentences), warm, and professional.
- Always respond in the same language the user is writing in, matching the site's active locale unless the user clearly switches languages.
`;
