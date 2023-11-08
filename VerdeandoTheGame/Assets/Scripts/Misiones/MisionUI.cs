using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MisionUI : MonoBehaviour
{
    public Image imagenDisp;
    public Button botonDisp;
    public int id;

    public void Descripcion()
    {
        MisionController.Instance.MostrarDescipcion(id);
    }
    public void ValidarMision()
    {
        MisionController.Instance.CambiarColor(id);
    }
}
