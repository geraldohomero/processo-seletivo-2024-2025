import { useState } from 'react';
import { Card, CardContent, Typography, Select, MenuItem, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ScatterChart, Scatter, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

const Ufjf = () => {
  const [selectedLine, setSelectedLine] = useState('all');

  const assignRankings = (data) => {
    let sortedData = [...data].sort((a, b) => {
      if (b.finalGradeAverage === a.finalGradeAverage) {
        if (b.projetoGrade === a.projetoGrade) {
          const aInterview = typeof a.interviewGrade === 'number' ? a.interviewGrade : 0;
          const bInterview = typeof b.interviewGrade === 'number' ? b.interviewGrade : 0;
          return bInterview - aInterview;
        }
        return b.projetoGrade - a.projetoGrade;
      }
      return b.finalGradeAverage - a.finalGradeAverage;
    });

    let rank = 1;
    let previousItem = null;
    let skipCount = 0;

    return sortedData.map((item) => {
      if (item.finalGradeAverage === null || item.interviewStatus !== "APROVADO") {
        return { ...item, ranking: "-" };
      }

      if (
        previousItem &&
        item.finalGradeAverage === previousItem.finalGradeAverage &&
        item.projetoGrade === previousItem.projetoGrade &&
        item.interviewGrade === previousItem.interviewGrade
      ) {
        skipCount++;
      } else {
        rank = rank + skipCount;
        skipCount = 1;
      }

      previousItem = item;
      return { ...item, ranking: rank };
    });
  };
  const linha1Data = [
    { inscription: "938/0034", projetoGrade: 75, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 70, interviewStatus: "APROVADO", finalGradeAverage: 72.5 },
    { inscription: "938/0020", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0006", projetoGrade: 75, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 87, interviewStatus: "APROVADO", finalGradeAverage: 81 },
    { inscription: "938/0051", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 82, interviewStatus: "APROVADO", finalGradeAverage: 86 },
    { inscription: "938/0001", projetoGrade: 95, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 100, interviewStatus: "APROVADO", finalGradeAverage: 97.5 },
    { inscription: "938/0010", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0039", projetoGrade: 50, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0045", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 96, interviewStatus: "APROVADO", finalGradeAverage: 93 },
    { inscription: "938/0048", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0036", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0037", projetoGrade: 80, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 80, interviewStatus: "APROVADO", finalGradeAverage: 80 },
    { inscription: "938/0012", projetoGrade: 50, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0011", projetoGrade: 50, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0013", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 1", interviewGrade: 95, interviewStatus: "APROVADO", finalGradeAverage: 92.5 },
    { inscription: "938/0050", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, finalGradeAverage: null }
  ];

  const linha2Data = [
    { inscription: "938/0004", projetoGrade: 50, projetoStatus: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0009", projetoGrade: 80, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 95, interviewStatus: "APROVADO", finalGradeAverage: 87.5 },
    { inscription: "938/0014", projetoGrade: 60, projetoStatus: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0017", projetoGrade: 70, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 70, interviewStatus: "APROVADO", finalGradeAverage: 70 },
    { inscription: "938/0019", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 85, interviewStatus: "APROVADO", finalGradeAverage: 87.5 },
    { inscription: "938/0022", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 88, interviewStatus: "APROVADO", finalGradeAverage: 89 },
    { inscription: "938/0024", projetoGrade: 80, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 88, interviewStatus: "APROVADO", finalGradeAverage: 84 },
    { inscription: "938/0030", projetoGrade: 85, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0038", projetoGrade: 60, projetoStatus: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0041", projetoGrade: 95, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 90, interviewStatus: "APROVADO", finalGradeAverage: 92.5 },
    { inscription: "938/0043", projetoGrade: 80, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 98, interviewStatus: "APROVADO", finalGradeAverage: 89 },
    { inscription: "938/0047", projetoGrade: 85, projetoStatus: "APROVADO", line: "Linha 2", interviewGrade: 85, interviewStatus: "APROVADO", finalGradeAverage: 85 },
    { inscription: "938/0049", projetoGrade: 60, projetoStatus: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    //inscrições indeferidas, tudo null: 0008,0005,0025 e 0046
    { inscription: "938/0005", projetoGrade: null, projetoStatus: null, line: "INDEFERIDO", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0008", projetoGrade: null, projetoStatus: null, line: "INDEFERIDO", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0025", projetoGrade: null, projetoStatus: null, line: "INDEFERIDO", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0046", projetoGrade: null, projetoStatus: null, line: "INDEFERIDO", interviewGrade: null, interviewStatus: null, finalGradeAverage: null }

  ];

  const linha3Data = [
    { inscription: "938/0021", projetoGrade: 96, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 95, interviewStatus: "APROVADO", finalGradeAverage: 95.5 },
    { inscription: "938/0031", projetoGrade: 93, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: "NÃO COMPARECEU", interviewStatus: "REPROVADO", finalGradeAverage: null },
    { inscription: "938/0023", projetoGrade: 90, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 85, interviewStatus: "APROVADO", finalGradeAverage: 87.5 },
    { inscription: "938/0035", projetoGrade: 80, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 75, interviewStatus: "APROVADO", finalGradeAverage: 77.5 },
    { inscription: "938/0042", projetoGrade: 74, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: "NÃO COMPARECEU", interviewStatus: "REPROVADO", finalGradeAverage: null },
    { inscription: "938/0032", projetoGrade: 73, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 55, interviewStatus: "REPROVADO", finalGradeAverage: 64 },
    { inscription: "938/0007", projetoGrade: 72, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 70, interviewStatus: "APROVADO", finalGradeAverage: 71 },
    { inscription: "938/0029", projetoGrade: 71, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 80, interviewStatus: "APROVADO", finalGradeAverage: 75.5 },
    { inscription: "938/0033", projetoGrade: 70, projetoStatus: "APROVADO", line: "Linha 3", interviewGrade: 75, interviewStatus: "APROVADO", finalGradeAverage: 72.5 },
    { inscription: "938/0040", projetoGrade: 55, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0018", projetoGrade: 50, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0028", projetoGrade: 45, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0015", projetoGrade: 40, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0044", projetoGrade: 35, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null },
    { inscription: "938/0003", projetoGrade: 30, projetoStatus: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, finalGradeAverage: null }
  ];

  const getLineData = () => {
    let data;
    switch (selectedLine) {
      case 'linha1':
        data = linha1Data;
        break;
      case 'linha2':
        data = linha2Data;
        break;
      case 'linha3':
        data = linha3Data;
        break;
      default:
        data = [...linha1Data, ...linha2Data, ...linha3Data];
    }
    return assignRankings(data);
  };

  const getLineStats = (data) => {
    const validFinalGrades = data.filter(item => item.finalGradeAverage !== null);
    const finalGrades = validFinalGrades.map(item => item.finalGradeAverage);
    const approved = validFinalGrades.filter(item => item.interviewStatus === "APROVADO").length;

    const validProjectGrades = data.filter(item => item.projetoGrade !== null && item.projetoGrade !== undefined);
    const projectGrades = validProjectGrades.map(item => item.projetoGrade);
    const averageProjectGrade = (projectGrades.reduce((a, b) => a + b, 0) / projectGrades.length).toFixed(2);

    const validInterviewGrades = data.filter(item => typeof item.interviewGrade === 'number');
    const interviewGrades = validInterviewGrades.map(item => item.interviewGrade);
    const averageInterviewGrade = (interviewGrades.reduce((a, b) => a + b, 0) / interviewGrades.length).toFixed(2);

    return {
      average: (finalGrades.reduce((a, b) => a + b, 0) / finalGrades.length).toFixed(2),
      highest: Math.max(...finalGrades),
      lowest: Math.min(...finalGrades),
      total: data.length,
      approved: approved,
      rejected: data.length - approved,
      perfectScores: finalGrades.filter(grade => grade === 100).length,
      averageProjectGrade: averageProjectGrade,
      averageInterviewGrade: averageInterviewGrade
    };
  };

  const currentData = getLineData();
  const stats = getLineStats(currentData);

  const sortedProjectData = [...currentData].sort((a, b) => b.projetoGrade - a.projetoGrade);
  const sortedInterviewData = currentData
    .filter(item => typeof item.interviewGrade === 'number')
    .sort((a, b) => b.interviewGrade - a.interviewGrade);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
          <p><strong>Inscrição:</strong> {data.inscription}</p>
          <p><strong>Nota do Projeto:</strong> {data.projetoGrade}</p>
          <p><strong>Nota da Entrevista:</strong> {data.interviewGrade}</p>
        </div>
      );
    }
    return null;
  }

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
      payload: PropTypes.shape({
        inscription: PropTypes.string,
        projetoGrade: PropTypes.number,
        interviewGrade: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
    }))
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Card sx={{
        mb: 4,
        margin: '0 auto',
        maxWidth: '1200px'
      }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Análise de Notas Finais - {selectedLine === 'all' ? 'Todas as Linhas' : `Linha ${selectedLine.replace('linha', '')}`}
          </Typography>
          <Select
            fullWidth
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            sx={{ mb: 4 }}
          >
            <MenuItem value="all">Todas as Linhas de Pesquisa</MenuItem>
            <MenuItem value="linha1">1. HISTÓRIA DA ARTE, PATRIMÔNIO, CULTURA E SOCIABILIDADES</MenuItem>
            <MenuItem value="linha2">2. HISTÓRIA GLOBAL, MICRO-HISTÓRIA E DIÁLOGOS EPISTÊMICOS</MenuItem>
            <MenuItem value="linha3">3. POLÍTICA, CULTURA E USOS DO PASSADO</MenuItem>
          </Select>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Média Final</Typography>
                <Typography variant="h4">{stats.average}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Média Projeto</Typography>
                <Typography variant="h4">{stats.averageProjectGrade}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Média Entrevista</Typography>
                <Typography variant="h4">{stats.averageInterviewGrade}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Maior Nota Final</Typography>
                <Typography variant="h4">{stats.highest}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Menor Nota Final</Typography>
                <Typography variant="h4">{stats.lowest}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Notas 100</Typography>
                <Typography variant="h4">{stats.perfectScores}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Aprovados</Typography>
                <Typography variant="h4">{stats.approved}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Reprovados</Typography>
                <Typography variant="h4">{stats.rejected}</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom>
            Correlação entre Notas do Projeto e Entrevista
          </Typography>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="projetoGrade" name="Nota do Projeto" domain={[0, 100]} />
                <YAxis type="number" dataKey="interviewGrade" name="Nota da Entrevista" domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={currentData.filter(item => typeof item.interviewGrade === 'number')} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <Typography variant="h6" gutterBottom>
            Distribuição das Notas Finais
          </Typography>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentData}>
                <XAxis dataKey="inscription" tick={false} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="finalGradeAverage" name="Nota Final">
                  {currentData.map((entry) => (
                    <Cell key={entry.inscription} fill={entry.finalGradeAverage < 70 ? '#FF4C4C' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <Typography variant="h6" gutterBottom>
            Distribuição das Notas da Entrevista
          </Typography>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sortedInterviewData}>
                <XAxis dataKey="inscription" tick={false} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="interviewGrade" name="Nota da Entrevista">
                  {sortedInterviewData.map((entry) => (
                    <Cell key={entry.inscription} fill={entry.interviewGrade < 70 ? '#FF4C4C' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <Typography variant="h6" gutterBottom>
            Distribuição das Notas do Projeto
          </Typography>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sortedProjectData}>
                <XAxis dataKey="inscription" tick={false} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="projetoGrade" name="Nota do Projeto">
                  {sortedProjectData.map((entry) => (
                    <Cell key={entry.inscription} fill={entry.projetoGrade < 70 ? '#FF4C4C' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <TableContainer sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4
          }}>
            <Table sx={{
              maxWidth: '900px',
              width: '100%'
            }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Posição</TableCell>
                  <TableCell align="center">Número de Inscrição</TableCell>
                  <TableCell align="center">Nota do Projeto</TableCell>
                  <TableCell align="center">Nota da Entrevista</TableCell>
                  <TableCell align="center">Nota Final (Média)</TableCell>
                  <TableCell align="center">Linha de Pesquisa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData
                  .sort((a, b) => {
                    if (b.finalGradeAverage === a.finalGradeAverage) {
                      if (b.projetoGrade === a.projetoGrade) {
                        const aInterview = typeof a.interviewGrade === 'number' ? a.interviewGrade : 0;
                        const bInterview = typeof b.interviewGrade === 'number' ? b.interviewGrade : 0;
                        return bInterview - aInterview;
                      }
                      return b.projetoGrade - a.projetoGrade;
                    }
                    return b.finalGradeAverage - a.finalGradeAverage;
                  })
                  .map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{item.ranking}</TableCell>
                      <TableCell align="center">{item.inscription}</TableCell>
                      <TableCell align="center" style={{ color: item.projetoGrade < 70 ? 'red' : 'inherit' }}>
                        {item.projetoGrade}
                      </TableCell>
                      <TableCell align="center" style={{ color: item.interviewGrade < 70 ? 'red' : 'inherit' }}>
                        {item.interviewGrade || item.interviewStatus}
                      </TableCell>
                      <TableCell align="center" style={{ color: item.finalGradeAverage < 70 ? 'red' : 'inherit' }}>
                        {item.finalGradeAverage !== null ? item.finalGradeAverage : '-'}
                      </TableCell>
                      <TableCell align="center">{item.line}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ufjf;