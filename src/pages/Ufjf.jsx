import { useState } from 'react';
import { Card, CardContent, Typography, Select, MenuItem, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Ufjf = () => {
  const [selectedLine, setSelectedLine] = useState('all');

  const assignRankings = (data) => {
    let sortedData = [...data].sort((a, b) => b.grade - a.grade);
    let rank = 1;
    let previousGrade = null;
    let skipCount = 0;

    return sortedData.map((item) => {
      if (item.status === "REPROVADO") {
        return { ...item, ranking: "-" };
      }

      if (previousGrade !== item.grade) {
        rank = rank + skipCount;
        skipCount = 0;
      } else {
        skipCount++;
      }
      previousGrade = item.grade;
      return { ...item, ranking: rank };
    });
  };

  const linha1Data = [
    { inscription: "938/0034", grade: 75, status: "APROVADO", line: "Linha 1", interviewGrade: 70, interviewStatus: "APROVADO", mediaGrade: 72.5 },
    { inscription: "938/0020", grade: 40, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0006", grade: 75, status: "APROVADO", line: "Linha 1", interviewGrade: 87, interviewStatus: "APROVADO", mediaGrade: 81 },
    { inscription: "938/0051", grade: 90, status: "APROVADO", line: "Linha 1", interviewGrade: 82, interviewStatus: "APROVADO", mediaGrade: 86 },
    { inscription: "938/0001", grade: 95, status: "APROVADO", line: "Linha 1", interviewGrade: 100, interviewStatus: "APROVADO", mediaGrade: 97.5 },
    { inscription: "938/0010", grade: 40, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0039", grade: 50, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0045", grade: 90, status: "APROVADO", line: "Linha 1", interviewGrade: 96, interviewStatus: "APROVADO", mediaGrade: 93 },
    { inscription: "938/0048", grade: 40, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0036", grade: 40, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0037", grade: 80, status: "APROVADO", line: "Linha 1", interviewGrade: 80, interviewStatus: "APROVADO", mediaGrade: 80 },
    { inscription: "938/0012", grade: 50, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0011", grade: 50, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0013", grade: 90, status: "APROVADO", line: "Linha 1", interviewGrade: 95, interviewStatus: "APROVADO", mediaGrade: 92.5 },
    { inscription: "938/0050", grade: 40, status: "REPROVADO", line: "Linha 1", interviewGrade: null, interviewStatus: null, mediaGrade: null }
  ];

  const linha2Data = [
    { inscription: "938/0004", grade: 50, status: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0009", grade: 80, status: "APROVADO", line: "Linha 2", interviewGrade: 95, interviewStatus: "APROVADO", mediaGrade: 87.5 },
    { inscription: "938/0014", grade: 60, status: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0017", grade: 70, status: "APROVADO", line: "Linha 2", interviewGrade: 70, interviewStatus: "APROVADO", mediaGrade: 70 },
    { inscription: "938/0019", grade: 90, status: "APROVADO", line: "Linha 2", interviewGrade: 85, interviewStatus: "APROVADO", mediaGrade: 87.5 },
    { inscription: "938/0022", grade: 90, status: "APROVADO", line: "Linha 2", interviewGrade: 88, interviewStatus: "APROVADO", mediaGrade: 89 },
    { inscription: "938/0024", grade: 80, status: "APROVADO", line: "Linha 2", interviewGrade: 88, interviewStatus: "APROVADO", mediaGrade: 84 },
    { inscription: "938/0030", grade: 85, status: "APROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0038", grade: 60, status: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0041", grade: 95, status: "APROVADO", line: "Linha 2", interviewGrade: 90, interviewStatus: "APROVADO", mediaGrade: 92.5 },
    { inscription: "938/0043", grade: 80, status: "APROVADO", line: "Linha 2", interviewGrade: 98, interviewStatus: "APROVADO", mediaGrade: 89 },
    { inscription: "938/0047", grade: 85, status: "APROVADO", line: "Linha 2", interviewGrade: 85, interviewStatus: "APROVADO", mediaGrade: 85 },
    { inscription: "938/0049", grade: 60, status: "REPROVADO", line: "Linha 2", interviewGrade: null, interviewStatus: null, mediaGrade: null },
  ];

  const linha3Data = [
    { inscription: "938/0021", grade: 96, status: "APROVADO", line: "Linha 3", interviewGrade: 95, interviewStatus: "APROVADO", mediaGrade: 95.5 },
    { inscription: "938/0031", grade: 93, status: "APROVADO", line: "Linha 3", interviewGrade: "NÃO COMPARECEU", interviewStatus: "REPROVADO", mediaGrade: null },
    { inscription: "938/0023", grade: 90, status: "APROVADO", line: "Linha 3", interviewGrade: 85, interviewStatus: "APROVADO", mediaGrade: 87.5 },
    { inscription: "938/0035", grade: 80, status: "APROVADO", line: "Linha 3", interviewGrade: 75, interviewStatus: "APROVADO", mediaGrade: 77.5 },
    { inscription: "938/0042", grade: 74, status: "APROVADO", line: "Linha 3", interviewGrade: "NÃO COMPARECEU", interviewStatus: "REPROVADO", mediaGrade: null },
    { inscription: "938/0032", grade: 73, status: "APROVADO", line: "Linha 3", interviewGrade: 55, interviewStatus: "REPROVADO", mediaGrade: 64 },
    { inscription: "938/0007", grade: 72, status: "APROVADO", line: "Linha 3", interviewGrade: 70, interviewStatus: "APROVADO", mediaGrade: 71 },
    { inscription: "938/0029", grade: 71, status: "APROVADO", line: "Linha 3", interviewGrade: 80, interviewStatus: "APROVADO", mediaGrade: 75.5 },
    { inscription: "938/0033", grade: 70, status: "APROVADO", line: "Linha 3", interviewGrade: 75, interviewStatus: "APROVADO", mediaGrade: 72.5 },
    { inscription: "938/0040", grade: 55, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0018", grade: 50, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0028", grade: 45, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0015", grade: 40, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0044", grade: 35, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null },
    { inscription: "938/0003", grade: 30, status: "REPROVADO", line: "Linha 3", interviewGrade: null, interviewStatus: null, mediaGrade: null }
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
    const grades = data.map(item => item.grade);
    const approved = data.filter(item => item.status === "APROVADO").length;
    return {
      average: (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2),
      highest: Math.max(...grades),
      lowest: Math.min(...grades),
      total: data.length,
      approved: approved,
      rejected: data.length - approved,
      perfectScores: grades.filter(grade => grade === 10.0).length
    };
  };

  const currentData = getLineData();
  const stats = getLineStats(currentData);

  return (
    <div style={{ textAlign: 'center' }}>
      <Card sx={{
        mb: 4,
        margin: '0 auto',
        maxWidth: '1200px'
      }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Análise de Notas dos Projetos - {selectedLine === 'all' ? 'Todas as Linhas' : `Linha ${selectedLine.replace('linha', '')}`}
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
                <Typography color="primary" variant="subtitle2">Média</Typography>
                <Typography variant="h4">{stats.average}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Maior Nota</Typography>
                <Typography variant="h4">{stats.highest}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#bbdefb', borderRadius: '8px' }}>
                <Typography color="primary" variant="subtitle2">Menor Nota</Typography>
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
            Distribuição das Notas
          </Typography>
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentData}>
                <XAxis dataKey="inscription" tick={false} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="grade" name="Nota">
                  {currentData.map((entry) => (
                    <Cell key={entry.inscription} fill={entry.grade < 70 ? '#FF4C4C' : '#3b82f6'} />
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
                  <TableCell align="center">Número</TableCell>
                  <TableCell align="center">Nota</TableCell>
                  <TableCell align="center">Linha de Pesquisa</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData
                  .sort((a, b) => {
                    if (b.grade === a.grade) {
                      return a.inscription.localeCompare(b.inscription);
                    }
                    return b.grade - a.grade;
                  })
                  .map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{item.inscription}</TableCell>
                      <TableCell align="center" style={{ color: item.grade < 70 ? 'red' : 'inherit' }}>
                        {item.grade}
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