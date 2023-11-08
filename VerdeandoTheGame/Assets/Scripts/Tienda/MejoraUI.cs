using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MejoraUI : MonoBehaviour
{
    public Image imagenDisp;
    public Text nombreDisp;
    public Text costoDisp;
    public Button comprarMejora;
    public int id;

    public void Comprar()
    {
        MejoraController.Instance.ComprarMejora(id);
    }
}
