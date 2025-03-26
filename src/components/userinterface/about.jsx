import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutTheJournal = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        About the Journal
      </Typography>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Research Ethics Guidelines
        </Typography>
        <Typography paragraph>
          The author should ensure that:
          <ul>
            <li>The research has been carried out with the utmost integrity and rigour.</li>
            <li>The case study, book, chapter, or essay is unique.</li>
            <li>No other magazine has received the work or is considering it. It has not been submitted anywhere. (For exceptions, see the regulations for conference papers and preprints.)</li>
            <li>There are no libellous, defamatory, or illegal statements in the work.</li>
            <li>For any content containing third parties, permission has been acquired.</li>
            <li>Consent proof has been obtained for any mentioned people or groups.</li>
            <li>Authorship has been agreed upon before submission, ensuring no one has been granted or denied authorship inappropriately (no ‘gifted’ or ‘ghost’ authorship).</li>
          </ul>
        </Typography>

        <Typography variant="h5" gutterBottom mt={4}>
          Attribution
        </Typography>
        <Typography paragraph>
          In order to provide a thorough documentation of the work history, authors should cite any prior publication or presentation of the concepts included in their current submission, including conference papers, workshop presentations, and listserv discussions. According to the author's rules, references to other works must be formatted in APA7 style. The consistency, correctness, and completeness of each reference should be thoroughly examined.
        </Typography>

        <Typography variant="h5" gutterBottom mt={4}>
          Authorship
        </Typography>
        <Typography paragraph>
          When listing the authors of a paper, it is important to avoid common issues such as ghost authorship (exclusion of a contributor), gift/guest authorship (inclusion of someone who hasn’t contributed), and disputes over the order of authors and their contributions. Authorship should be agreed upon before submission to prevent these issues. An author must have made substantial contributions to the conception or design of the work, drafted or revised it critically, given final approval of the version to be published, and agreed to be accountable for all aspects of the work. If a contributor does not meet these criteria, they should be included in the acknowledgements instead.
        </Typography>

        <Typography variant="h5" gutterBottom mt={4}>
          Conflicts of Interest
        </Typography>
        <Typography paragraph>
          Authors, reviewers, and editors must report any potential conflicts of interest. Authors should declare anything that may have influenced their research or could affect the review process or publication of their article. If uncertain, authors should consult the editor or publisher before submission.
        </Typography>
        <Typography paragraph>
          Possible conflicts of interest include:
          <ul>
            <li>An earlier collaboration between the writer and editor.</li>
            <li>A stake in the research's results, either financially or personally.</li>
            <li>Unreported financial assistance from a concerned third party for the study.</li>
            <li>A financial or personal interest in suppressing the research.</li>
            <li>A pending patent.</li>
          </ul>
          When submitting work, authors should include a note detailing any financial support for the research from third parties and highlight any other potential conflicts of interest.
        </Typography>

        <Typography variant="h5" gutterBottom mt={4}>
          Plagiarism
        </Typography>
        <Typography paragraph>
          Submitted content should be based on the author’s research and expressed in their own words. Failure to do so may be considered plagiarism. JMLR editors use the plagiarism detection service. This, along with the expertise of reviewers and editors, makes it increasingly difficult for plagiarized work to go unnoticed.
        </Typography>
        <Typography paragraph>
          Plagiarism can take various forms:
          <ul>
            <li><strong>Verbatim copying</strong>: Copying exact text from another’s work without proper acknowledgement, references, or quotation marks.</li>
            <li><strong>Paraphrasing</strong>: Altering or rearranging content without proper attribution. Serious paraphrasing without credit is considered as grave as direct copying.</li>
            <li><strong>Reusing content without attribution</strong>: Using figures, tables, or text from another source without proper permission or credit.</li>
          </ul>
        </Typography>

        <Typography paragraph>
          Allegations of plagiarism can significantly impact a researcher’s career. When approached by a third party with such an allegation, a response is always sought from the original author(s) or copyright holder(s) before any action is taken. JMLR remains impartial and is not influenced by external parties. All allegations are handled according to the COPE (Committee on Publication Ethics) guidelines.
        </Typography>

        <Typography paragraph>
          JMLR is not obligated to discuss individual cases of alleged plagiarism with third parties and reserves the right not to proceed if the complainant provides a false name or affiliation, or behaves inappropriately or threateningly towards JMLR editors.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutTheJournal;