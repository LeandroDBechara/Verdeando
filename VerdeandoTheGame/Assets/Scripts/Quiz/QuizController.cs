using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class QuizController : MonoBehaviour
{
    //componentesUI
    public Text dineroDisp;
    public Text ecoPointDisp;

    public Text mensajeDisp;
    public List<QuizSO> listaPreguntas;
    public Text preguntaDisp;
    public Text respuesta1Disp;
    public Text respuesta2Disp;
    public Text respuesta3Disp;
    public Text respuesta4Disp;
    private int pregunta;
    public List<Button> botones;
    public static QuizController Instance;

    private void Start()
    {
        GenerarQuiz();
    }

    private void Update()
    {
        dineroDisp.text = "$" + GameController.Instance.gameSO.dinero.ToString("0");
        ecoPointDisp.text = GameController.Instance.gameSO.ecoPoint.ToString("0") + " EP";
    }


    public void GenerarQuiz()
    {
        pregunta = Random.Range(0,listaPreguntas.Count);

        preguntaDisp.text = listaPreguntas[pregunta].pregunta;
        respuesta1Disp.text = listaPreguntas[pregunta].respuesta1;
        respuesta2Disp.text = listaPreguntas[pregunta].respuesta2;
        respuesta3Disp.text = listaPreguntas[pregunta].respuesta3;
        respuesta4Disp.text = listaPreguntas[pregunta].respuesta4;
        
    }

    public void Responder(int id)
    {
        if(id == listaPreguntas[pregunta].respuestaCorrecta)
        {
            //cambiar boton a color verde
            botones[id-1].image.color = Color.green;
            //mostrar mensaje de exito
            mensajeDisp.text = "!! Felicidades, Ganaste 1 Ecopunto !!";
            StartCoroutine(MensageRespuesta());
            //sumar ecopuntos
            GameController.Instance.gameSO.ecoPoint += 1;
            
        }
        else
        {
            //cambiar boton a color rojo
            botones[id - 1].image.color = Color.red;
            //mostrar mensaje fracaso
            mensajeDisp.text = "Lastima :,( segui partisipando";
            StartCoroutine(MensageRespuesta());

        }
        for(int i = 0; i < botones.Count; i++)
        {
            botones[i].interactable = false;
        } 
    }

    public IEnumerator MensageRespuesta()
    {
        CanvasGroup CG = mensajeDisp.gameObject.GetComponent<CanvasGroup>();
        CG.alpha = 1;
        yield return new WaitForSeconds(1);
        while (CG.alpha > 0)
        {
            CG.alpha -= 0.05f;
            yield return new WaitForSeconds(0.1f);
        }
    }
    public void CambiarEscena(int ID)
    {
        SceneManager.LoadScene(ID);
    }
}
